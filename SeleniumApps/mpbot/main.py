#heroku ps:scale worker=1
#heroku ps:scale worker=0
#heroku logs --tail

from selenium import webdriver
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager

from utils.data import horario, visitantes1 as visitantes, ruta, contacto

from pages.visitantes import cVisitantes
from pages.horario import cHorarioGeneral, cHorarioPromocional
from pages.terminos import cTerminos

def runApp(driver):
  reservaCompleta = False
  #
  try:
    driver.get('https://reservas.machupicchu.gob.pe/inicio')
  except:
    print('Error al acceder a reservas machupicchu')
    return

  # horario
  print('\n------- Horario -------')
  nuevoReservaHorario = cHorarioGeneral(driver, horario, visitantes, ruta)
  reservaCompleta = nuevoReservaHorario.run()
  if reservaCompleta:
    print('------- Fin Horario -------\n')
  else:
    print('Error! - Terminando programa') 
    return False

  #Visitantes
  print('\n------- Visitantes -------')
  objVisitantes = cVisitantes(driver, visitantes)
  if objVisitantes.run():
    print('------- Fin Visitantes -------\n')
  else:
    print('Error! - Terminando programa') 
    return False
  
  # terminos
  print('\n------- Terminos -------')
  terminos = cTerminos(driver, contacto['correo'])
  if terminos.run():
    print('------- Fin Terminos -------\n')
  else:
    print('Error! - Terminando programa') 
    return False

  return True

if __name__ == "__main__":
  driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))
  # 
  # options - heroku
  #chrome_options = webdriver.ChromeOptions()
  #chrome_options.add_argument("--headless")
  #chrome_options.add_argument("--disable-dev-shm-usage")
  #chrome_options.add_argument("--no-sandbox")
  #chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")

  #driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)
  reservado = runApp(driver)
  while not reservado:
    #driver.close()
    print('Intentar otra ves')
    #driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))
    reservado = runApp(driver)