from selenium.webdriver.common.by import By
from utils.general import datePicker, especialSelect

class cVisitantes:
  def __init__(self, driver, visitantes):
    self.driver = driver
    self.visitors = visitantes
  
  # contenedor form de acuerdo
  def fmVisitantes(self):
    try:
      self.form = self.driver.find_element(By.ID, 'fmVisitantes')
    except Exception as e:
      print(f'Error!.. fmVisitantes: {e}')
      return False
    
    return True
  # obtiene cards(divs) de cada visitante
  def getVisitors(self):
    try:
      self.cardVisitors = self.form.find_elements(By.CLASS_NAME, 'card-visitor')
    except Exception as e:
      print(f'Error!.. getVisitors: {e}')
      return False
    
    return True
  # rellenar visitantes (bucle)
  def fillVisitors(self):
    for i in range(len(self.visitors)):
      visitor = self.visitors[i] # datos visitante i
      card = self.cardVisitors[i] # card visitante i

      if not self.fillVisitor(visitor, i, card):
        return False
    return True
  # rellenar card de visitante
  # los id y name de cada card estan identificados con un index de 0 a mas
  def fillVisitor(self, visitor, index, card):
    print(f'Visitante {index+1}...')
    try:
      # pais
      identificador= f'select-options-fmVisitantes_Reserva_ListaVisitantes_{index}__IdPais'
      if not especialSelect(card, visitor['pais'], identificador):
        return False

      # apellidos
      identificador= f'fmVisitantes_Reserva_ListaVisitantes_{index}__Apellidos'
      inputApellidos = card.find_element(By.ID, identificador)
      inputApellidos.send_keys(visitor['apellidos'])

      # nombres
      identificador= f'fmVisitantes_Reserva_ListaVisitantes_{index}__Nombres'
      inputNombres = card.find_element(By.ID, identificador)
      inputNombres.send_keys(visitor['nombres'])

      #tipo de documento
      identificador = f'select-options-fmVisitantes_Reserva_ListaVisitantes_{index}__IdTipoDoc'
      if not especialSelect(card, visitor['tipodoc'], identificador):
        return False
      
      # documento
      identificador= f'fmVisitantes_Reserva_ListaVisitantes_{index}__NroDoc'
      inputDoc = card.find_element(By.ID, identificador)
      inputDoc.send_keys(visitor['nrodoc'])

      # fecha
      identificador= f'Reserva.ListaVisitantes[{index}].FechaNac'
      inputFecha = card.find_element(By.NAME, identificador)
      inputFecha.click()
      identificador= f'fmVisitantes_Reserva_ListaVisitantes_{index}__FechaNac_root'
      datePicker(card, identificador, visitor['fNacimiento'])
      
      # sexo
      labelsSexo = card.find_elements(By.CSS_SELECTOR, 'label.form-check-label')
      for label in labelsSexo:
        if(visitor['sexo'] == label.text):
          label.click()
    
    except Exception as e:
      print(f'Error!.. fillVisitor: {e}')
      return False
    
    print(f'Visitante {index+1} Ok.\n')
    return True
    
  def submitVisitantes(self):
    try:
      btnSubmit = self.driver.find_element(By.CSS_SELECTOR, 'button.btn-primary')
      btnSubmit.click()
    except Exception as e:
      print(f'Error!.. submitVisitantes: {e}')
      return False
    
    return True
  
  def run(self):
    if self.fmVisitantes():
      print('Se obtuvo form fmVisitantes Ok.')
    else:
      return False
    #
    if self.getVisitors():
      print(f'Se obtuvo cards de {len(self.visitors)} visitantes Ok.')
    else:
      return False
    #
    if self.fillVisitors():
      print('Se relleno datos de visitantes Ok.')
    else:
      return False
    #
    if not self.submitVisitantes():
      return False
    
    return True