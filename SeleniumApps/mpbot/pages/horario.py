from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from utils.general import datePicker, especialSelect

class cHorario:
  def __init__(self, driver, horario, visitantes, ruta, tarifa):
    self.driver = driver
    self.horario = horario # diccionario{year, month, day}
    self.ruta = ruta # string ruta a machupicchu
    self.tarifa = tarifa # string promocional, general, (exonerar)
    self.tarifaIni = 'Gen' if tarifa == 'general' else 'Prom' # string Prom, Gen, (Exo)
    self.fillCantidades(visitantes)
  
  # rellenar catindad de visitantes, recorrer parametro visitantes
  def fillCantidades(self, visitantes):
    self.nroAdultos = 0
    self.nroEstudiantes = 0
    self.nroMenores = 0
    for visitante in visitantes:
      if visitante['tipo'] == 'Adulto':
        self.nroAdultos += 1
      elif visitante['tipo'] == 'Estudiante':
        self.nroEstudiantes += 1
      else: # infante
        self.nroMenores += 1

  # obtener elemento lista tarifa y clickear
  def elegirTarifa(self):
    identificador = f'list-{self.tarifa}-list'
    try:
      elem = self.driver.find_element('id', identificador)
      elem.click()
    except Exception as e:
      print(f'Error!.. elegirTarifa: {e}')
      return False
    
    return True
  
  # obtener elemento contenedor tarifa(div) y seleccionar ruta
  # lis id o name estan identificados con la tarifa: promocional, general, exonerado? 
  def setRuta(self):
    # contenedor
    identificador = f'list-{self.tarifa}'
    try:
      self.tarifaContenedor = self.driver.find_element('id', identificador)
      # ruta
      identificador = f'select-options-resTipoRuta{self.tarifaIni}'
      return especialSelect(self.tarifaContenedor, self.ruta, identificador)
    
    except Exception as e:
      print(f'Error!.. setRuta: {e}')
      return False

  # seleccionar fecha de visita
  def setFecha(self):
    identificador = f'Reserva.FechaReserva{self.tarifaIni}'
    try:
      # abrir picker 
      inputFecha = self.tarifaContenedor.find_element(By.NAME, identificador)
      inputFecha.click()

      # seleccionar fecha de picker
      identificador = f'Reserva_FechaReserva{self.tarifaIni}_root'
      return datePicker(self.tarifaContenedor, identificador, self.horario)

    except Exception as e:
      print(f'Error!.. setFecha: {e}')
      return False
    
  # rellenar cantida de personas(tipo: adultos, estudiantes, menores)
  def fillPersonas(self, tipo, cantidad):
    try:
      identificador = f'Reserva.{tipo}{self.tarifaIni}'
      personasInput = self.tarifaContenedor.find_element(By.NAME, identificador)
      personasInput.clear()
      personasInput.send_keys(cantidad)
    except Exception as e:
      print(f'Error!.. fillPersonas: {e}')
      return False
    
    return True
  
  def fillCantidadPersonas(self):
    if(not self.fillPersonas('Adultos', self.nroAdultos)):
      print('Error!.. No se pudo rellenar cantida de adultos')
      return False
    if(not self.fillPersonas('Estudiantes', self.nroEstudiantes)):
      print('Error!.. No se pudo rellenar cantida de estudiantes')
      return False
    if(not self.fillPersonas('Escolares', self.nroMenores)):
      print('Error!.. No se pudo rellenar cantida de menores')
      return False
    return True
    
  # click en disponibilidad
  def disponibilidad(self):
    try:
      wait = WebDriverWait(self.tarifaContenedor, 5)
      if(self.tarifa == 'general'):
        dispoBtn = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'btn-adobe')))#'//button[normalize-space()="Disponibilidad"]')))
      else:
        dispoBtn = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, 'btn-rojo')))
      dispoBtn.click()
      return True
    except Exception as e:
      print(f'Error!.. disponibilidad: {e}')
      return False

  # buscar horarios
  def getHorariosDisponibles(self):
    print('Obtener horarios disponibles...')
    tmp = self.tarifaIni
    if(self.tarifa == 'general'):
      tmp = 'General'

    identificador = f'fmRuta{tmp}'
    try:
      wait = WebDriverWait(self.driver, 5)
      fmRuta = wait.until(EC.visibility_of_element_located((By.ID, identificador)))
      
      avlb = fmRuta.find_elements(By.CSS_SELECTOR, 'label.btn')
    except Exception as e:
      print(f'Error!.. getHorariosDisponibles: {e}')
      return []
    return avlb

  # seleecionar horarios disponibles
  def seleccionarHorario(self, horarios):
    if(len(horarios) == 0):
      print('Ups!.. No hay espacios disponibles')
      return False
    # buscar horario disponible
    horarioSeleccionado = False
    try:
      for horario in horarios:
        clases = horario.get_attribute("class")
        if 'btn-disabled' not in clases:
          print(horario.find_element(By.TAG_NAME, 'br').text)
          
          horario.click()
          horarioSeleccionado = True
          break
    except Exception as e:
      print(f'Error!.. seleccionarHorario {e}')
      return False
    return horarioSeleccionado
  
  # submit horarios
  def submit(self):
    try:
      btnPrim = self.driver.find_element(By.CSS_SELECTOR, 'button.btn-primary')
      btnPrim.click()
    except Exception as e:
      print(f'Error!.. submit: {e}')
      return False
    return True

  def run(self):
    if(self.elegirTarifa()):
      print('Tarifa seleccionada Ok.')
    else:
      return False
    #
    if(self.setRuta()):
      print('Ruta seleccionada Ok.')
    else:
      return False
    #
    if(self.fillCantidadPersonas()):
      print(f'{self.nroAdultos} adultos, {self.nroEstudiantes} estudiantes y {self.nroMenores} menores rellenados correctamente Ok.')
    else:
      return False
    #
    if(self.setFecha()):
      print('Fecha de reserva seleecionada Ok.')
    else:
      return False
    #
    if(self.disponibilidad()):
      print('Boton disponibilidad Ok.')
    else:
      return False
    #
    horarios = self.getHorariosDisponibles()
    #
    if self.seleccionarHorario(horarios):
      print('Horario seleccionado Ok.')
    else:
      return False
    #
    if not self.submit():
      return False
    #
    return True

class cHorarioPromocional(cHorario):
  def __init__(self, driver, horario, visitantes, ruta):
    super().__init__(driver, horario, visitantes, ruta, tarifa='promocional')

class cHorarioGeneral(cHorario):
  def __init__(self, driver, horario, visitantes, ruta):
    super().__init__(driver, horario, visitantes, ruta, tarifa='general')