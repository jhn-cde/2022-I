from time import sleep
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class cTerminos:
  def __init__(self, driver, correo):
    self.driver = driver
    self.correo = correo

  def informacionVerdadera(self):
    try:
      check = self.driver.find_element(By.CSS_SELECTOR, 'label.form-check-label')
      check.click()
    except Exception as e:
      print(f'Error!.. informacionVerdadera: {e}')
      return False
    return True
  
  def informacionContacto(self):
    try:
      inputCorreo = self.driver.find_element(By.ID, 'fmContacto_Reserva_Correo')
      inputCorreo.send_keys(self.correo)
      #
      inputConfirmarCorreo = self.driver.find_element(By.ID, 'fmContacto_Reserva_RepetirCorreo')
      inputConfirmarCorreo.send_keys(self.correo)
    except Exception as e:
      print(f'Error!.. informacionContacto: {e}')
      return False
    
    return True
  
  def leerYAceptar(self):
    wait = WebDriverWait(self.driver, 5)
    try:
      buttons = self.driver.find_elements(By.CSS_SELECTOR, 'button.btn.btn-default')
      for button in buttons:
        button.click()
        
        # agree
        #ID modal (div container)
        dataTarget = button.get_attribute('data-target')
        identificador = dataTarget[1:]
        # esperar visibilidad
        modalDiv = wait.until(
        EC.visibility_of_element_located((By.ID, identificador)))
        
        #ID aceptar (button)
        identificador = 'agreeButton' if dataTarget == '#modalTyC' else ('agreeButtonPB' if dataTarget == '#modalPB' else 'agreeButtonCU')
        print(f'aceptando {identificador}...')
        # aceptar (click)
        buttonAgree = modalDiv.find_element(By.ID, identificador)
        buttonAgree.click()
        buttonAgree.click() # doble click para cerrar
        sleep(0.2) # esperar cierre
    except Exception as e:
      print(f'Error!.. leerYAceptar: {e}')
      return False
    
    return True

  def generarReserva(self):
    try:
      btnSubmit = self.driver.find_element(By.ID, 'btSubmitContact')
      print(btnSubmit.text)
      #btnSubmit.click()
    except Exception as e:
      print(f'Error!.. generarReserva: {e}')
      return False
    
    return True
    
  def run(self):
    #print(self.driver.find_element(By.CSS_SELECTOR, 'td.money').text)

    if(self.informacionVerdadera()):
      print('Check informacion verdadera Ok.')
    else:
      return False
    #
    if(self.informacionContacto()):
      print('Informacion de contacto Ok.')
    else:
      return False
    #
    if(self.leerYAceptar()):
      print('Leer y aceptar Ok.')
    else:
      return False
    #
    if not self.generarReserva():
      return False
    
    return True