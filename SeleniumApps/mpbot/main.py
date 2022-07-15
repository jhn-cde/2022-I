#heroku ps:scale worker=1
#heroku ps:scale worker=0
#heroku logs --tail

from selenium import webdriver
import os

from utils.data import horario, visitantes, ruta, contacto

from pages.visitantes import cVisitantes
from pages.horario import cHorarioPromocional
from pages.terminos import cTerminos

def runApp(driver):
  #
  try:
    driver.get('https://reservas.machupicchu.gob.pe/inicio')
  except:
    print('Error al acceder a reservas machupicchu')
    return

  # horario
  print('\n------- Horario -------')
  nuevoReservaHorario = cHorarioPromocional(driver, horario, visitantes, ruta)
  if nuevoReservaHorario.run():
    print('------- Fin Horario -------\n')
  else:
    print('Error! - Terminando programa') 
    return

  #Visitantes
  print('\n------- Visitantes -------')
  objVisitantes = cVisitantes(driver, visitantes)
  if objVisitantes.run():
    print('------- Fin Visitantes -------\n')
  else:
    print('Error! - Terminando programa') 
    return
  
  # terminos
  print('\n------- Terminos -------')
  terminos = cTerminos(driver, contacto['correo'])
  if terminos.run():
    print('------- Fin Terminos -------\n')
  else:
    print('Error! - Terminando programa') 
    return

if __name__ == "__main__":
  #driver = Firefox(service=Service(GeckoDriverManager().install()))
  # 
  # options - heroku
  chrome_options = webdriver.ChromeOptions()
  chrome_options.add_argument("--headless")
  chrome_options.add_argument("--disable-dev-shm-usage")
  chrome_options.add_argument("--no-sandbox")
  chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")

  driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)

  runApp(driver)
  driver.close()