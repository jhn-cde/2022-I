from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def datePicker(driver, id, fecha):
  year = fecha['year']
  month = fecha['month']
  day = fecha['day']
  print(f'Seleccionando fecha dia:{day}, mes:{month}, anio:{year}...')
  try:
    picker = driver.find_element(By.ID, id)

    # year
    selectyear = Select(picker.find_element(By.CLASS_NAME, 'picker__select--year'))
    selectyear.select_by_value(year)
    
    #month
    selectmonth = Select(picker.find_element(By.CLASS_NAME, 'picker__select--month'))
    selectmonth.select_by_value(month)
  
    #day
    diaSeleccionando = False
    daysAvlb = picker.find_elements(By.CLASS_NAME, 'picker__day--infocus')
    for dayAvlb in daysAvlb:
      if('picker__day--disabled' not in dayAvlb.get_attribute('class')):
        if(dayAvlb.text == day):
          dayAvlb.click()
          diaSeleccionando = True
          break

  except Exception as e:
    print(f'Error!.. datePicker: {e}')
    return False

  if not diaSeleccionando:
    print(f'Error!.. datePicker: (line 34) general.py - No se selecciono dia {day}')
  return diaSeleccionando
  

def especialSelect(container, option, ulID):
  print(f'Seleccionando opcion "{option}"...')
  #click para abrir opciones
  try:
    wait = WebDriverWait(container, 5)
    
    inputElems = container.find_elements(By.CLASS_NAME, 'select-dropdown')
    for inputElem in inputElems:
      if(inputElem.get_attribute('data-activates') == ulID):
        inputElem.click()
        break
    
    #lista de opciones
    ul = container.find_element(By.ID, ulID)
    lis = ul.find_elements(By.TAG_NAME, 'li')
    #print(len(lis))
    #buscar y clickear opcion
    opcionSeleccionada = False
    for li in lis:
      #print('li', li.find_element(By.TAG_NAME, 'span').text)

      if(li.text == option):
        li.click()
        opcionSeleccionada = True
        break

  except Exception as e:
      print(f'Error!.. especialSelect: {e}')
      return False
  if not opcionSeleccionada:
    print(f'Error!.. especialSelect: (line 61) general.py - Ninguna opcion coincide con "{option}"')
  return opcionSeleccionada