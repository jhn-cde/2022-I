; Johan Wilfredo Huaman Mendoza
;----------------------------------------------------------
; Ejercicio 17: La policia de transito aplica la siguiente escala de multas:
;     Exceso sobre                  Multa
;   Limite de velocidad               S/.
;    - Menos de 10%                  30
;    - De 10 a 30%                   50
;    - Mas de 30%                   100
; Escribir un algoritmo que calcule la multa.
;----------------------------------------------------------

;----------------------------------------------------------
; Solucion: Se tienen dos inputs (limVelocidad y velocidad)
; exceso10 = limVelocidad + limVelocidad*10% = limVelocidad*110%
; exceso30 = limVelocidad + limVelocidad*30% = limVelocidad*130%
; Multa = 0
; Si velocidad > limVelocidad:
;   si velocidad < exceso10:
;     Multa = 30
;   sino si velocidad <= exceso30:
;     Multa = 50
;   sino:
;     Multa = 100
;----------------------------------------------------------       
    

; DS
data segment
  number dw 0                 ; guarda un numero (palabra), input
  numstr db '$$$$$'           ; guarda string, para convertir numero a string            
  numberplace db 10           ; guarda posicion de digito(unidad, decena centena)
  linefeed db 13, 10, "$"     ; salto de linea
  porcentaje dw 0             ; porcentaje (110% o 130%)
  
  ; Mensajes para imprimir en pantalla
  messageLimVelocidad db "Ingrese limite de velocidad: $"
  messageVelocidad db "Ingrese velocidad: $"
  
  messageMulta db "La multa es: S/$"
  
  ; datos lectura
  limVelocidad dw 0           ; limite de velocidad
  velocidad dw 0              ; velocidad real
  
  ; para datos obtenidos                                                   
  multa dw 0                  ; multa correspondiente
  
ends

; SS
stack segment
  dw   128  dup(0)
ends

; CD
code segment
  ; Convertir numero a string.
  ; extrae los digitos uno por uni, los guarda en pila
  ; extrae los digitos de la pila y los va concatenando
  ; Parametros:  AX = numero.
  ;              SI = Puntero donde se va a guardar el string. 
  number2string proc 
    call dollars          ; Rellenar string con $.
    mov  bx, 10           ; Extraccion de digitos, dividir por 10.
    mov  cx, 0            ; Contador de digitos extraidos.
    ; Obtener y apilar digitos de numero
   ciclo_n2s_1:       
    mov  dx, 0            ; Necesario para la division.
    div  bx               ; AX / 10:  AX:cociente DX:residuo.
    push dx               ; Guardar digito extraido en pila.
    inc  cx               ; Incrementar contador.
    cmp  ax, 0            ; Si numero es:
    jne  ciclo_n2s_1      ; no cero, loop, obtener sgte digito.  
    ; Desapilar y concatenar digitos extraidos.
   ciclo_n2s_2:  
    pop  dx               ; Extraer digito de pila
    add  dl, 30h          ; Convertir digito a char.
    mov  [si], dl         ; Concatenar digito
    inc  si               ; Actualiar puntero
    loop ciclo_n2s_2      ; Loop hasta terminar contador(cx)
  
    ret
  number2string endp       
  ; Rellenar numstr con '$'.
  ; Parametro : SI = puntero al string a rellenar. 
  dollars proc                 
    mov  cx, 5                ; Iniciar contador (len str)
    mov  di, offset numstr    ; Guardar desplazamiento
   dollars_loop:               
    mov  bl, '$'              
    mov  [di], bl             ; rellenar $
    inc  di                   ; siguiente posicion
    loop dollars_loop         
  
    ret
  dollars endp
  ; Escribir text.
  ; Parametro : dx = texto a imprimir.  
  print_text proc
    mov ah, 09h               ; Escribir string
    int 21h                   ; llamar a la interrupcion 09h
    ret                                
  print_text endp            
  ; Salto de linea.
  next_line proc
    mov dx, offset linefeed   ; Imprimir salto de linea
    call print_text
    ret
  next_line endp
  ; Escribir numero.     
  ; Parametro : ax = numero a imprimir. 
  print_number proc
    mov si, offset numstr     ; Alistar parametros de number2string
    call number2string        ; Convertir
    
    mov  dx, offset numstr    ; Imprimir numero convertido a string
    call print_text
    
    ret
  print_number endp   
  ; Leer numero.
  read_number proc            
    mov number, 0h            ; Reiniciar valor de numero
    
   ciclo_read_number:
    mov ah, 01h               ; Leer char de input, resultados en al
    int 21h                   ;              
    
    ; Verificar enter
    cmp al, 0dh               ; Verificar si al:
    je salir_read_number      ; 0dh, enter a sido presionado: salir
                                                      
    ; Validar                                                  
    ; digito ascii menor a 30h (0)
    cmp al, 30h               ; digito <> 30h 
    jb fin                    ; si digito < 30h fin programa             
    ; digito ascii mayor a 39h (9)
    cmp al, 39h               ; digito <> 39h 
    ja fin                    ; si digito > 39h fin programa
                                                      
    ; Obtener digito leido
    sub al, 30h               ; Restar 30 para convertir a numero
    mov ah, 00h               ; Limpiar ah
    mov bx, ax                ; Copiar digito a bx
    
    ; Actualizar numero
    mov ax, number            ; Copiar numero a ax
    mul numberplace           ; Mutiplicar por 10, posicion de digito
    add ax, bx                ; Sumar digito a numero
    mov number, ax            ; Actualizar valor de numero
    
    jmp ciclo_read_number     ; Bucle
  salir_read_number:          
    call next_line            ; Salto de linea
    mov ax, number
    ret                       
  read_number endp                           
  
  ;------------------------------------------
  ; Calcula el porcentaje bx del limite de velocidad
  ; Parametros: bx = porcentaje requerido(110%, 130%)
  ; Retorna: porcentaje de limVelocidad 
  get_porcentaje proc
    mov ax, limVelocidad
    mul bx
    mov bx, 100d
    div bx
    mov porcentaje, ax
    ret
  get_porcentaje endp
  ;------------------------------------------ 
  ; Calcula la multa correspondiente de acuerdo a la velocidad
  ; Parametros: velocidad, limVelocidad
  ; Retorna: multa
  get_multa proc
    mov multa, 0h         ; Iniciar multa en 0
   noExcede:
    mov ax, velocidad
    mov bx, limVelocidad                           
    cmp ax, bx            ; velocidad <> limVelocidad
    JBE finMulta          ; Fin si velocidad <= limVelocidad
   ;                      ; Si velocidad > limVelocidad aplicar multa
   excesoMenor10:                            
    mov bx, 110d          ; 
    call get_porcentaje   ; Obtener 110%
     
    mov ax, velocidad
    mov bx, porcentaje
    cmp ax, bx            ; velocidad <> 110%   
   
    JAE excesoMenor30     ; si velocidad >= 110% salta a excesoMenor30
    mov multa, 30d        ; si velocidad < 110% actualiza multa
    jmp finMulta
   ;
   excesoMenor30:        
    mov bx, 130d          ;
    call get_porcentaje   ; Obtener 130%
                                                 
    mov ax, velocidad
    mov bx, porcentaje
    cmp ax, bx            ; velocidad <> 130%
    JA excesoMayor30      ; si velocidad > 130% salta a excesoMayor30
    mov multa, 50d        ; si velocidad <= 130% actualiza multa
    jmp finMulta
   ;
   excesoMayor30:               
    mov multa, 100d       ; velocidad > 130%, actualizar multa
    
   finMulta:     
    ret
  get_multa endp

start:
; Establecer registros de segmento
  mov ax, data
  mov ds, ax
  mov es, ax      
  
leer_datos:
  ; leer limite de velocidad
  lea dx, messageLimVelocidad       ;Mostrar mensaje para input
  call print_text                   ;
  call read_number                  ;Leer numero
  mov limVelocidad, ax              ;Guardar numero leido
  
  ; leer velocidad
  lea dx, messageVelocidad          ;Mostrar mensaje para input
  call print_text                   ;
  call read_number                  ;Leer numero
  mov velocidad, ax                 ;Guardar numero leido
  
resolver:
  call get_multa                    ;Monto correspondiente
  
  lea dx, messageMulta
  call print_text                   ;Mostrar texto complementario
                                                      
  mov ax, multa                     ;Monto correspondiente en ax(parte decimal)
  call print_number                 ;Imprimir monto
  call next_line                    ;Salto de linea
                                                      
  call next_line                    ;Salto de linea 
  jmp leer_datos                    ;Volver a pedir datos hasta ingresar no numero
fin:
  mov ah, 04ch                      ;Terminar programa
  int 21h  

ends

end start