;Ejercicio 23: Dos socios de una empresa exportadora, aportan cada uno cierta 
;cantidad de un mismo producto. Luego de producida la venta al exterior reciben un
;cantidad de dinero. Elaborar un algoritmo para determinar cuanto corresponde a 
;cada socio, proporcional a su aporte.

;Solucion: La solucion se puede realizar en dos pasos
;1. obtener porcentaje que le corresponde a cada socio
;     porcentaje = aporte/aporte_total
;2. determinar monto correspondiente
;     monto = venta*porcentaje
;
;En este programa se varia un poco la formula:
;     monto = venta*(aporte/aporte_total)
;     monto = (venta*aporte) / aporte_total
;   esta ultima formula es usada para la solucion del problema
;   primero la multiplicacion y luego la division

; DS
data segment
  number dw 0                 ; guarda un numero (palabra), input
  numstr db '$$$$$'           ; guarda string, para convertir numero a string            
  numberplace db 10           ; guarda posicion de digito(unidad, decena centena)
  linefeed db 13, 10, "$"     ; salto de linea
 
  ; Mensajes para imprimir en pantalla
  message1 db "Ingrese aporte 1: $"
  message2 db "Ingrese aporte 2: $"
  messageventa db "Ingrese venta: $"
  
  messagecorresponde1 db "Al socio 1 le corresponde: $"
  messagecorresponde2 db "Al socio 2 le corresponde: $"
  
  ; para datos leidos
  aporte1 dw 0          ; guarda aporte de socio 1
  aporte2 dw 0          ; guarda aporte de socio 2
  venta dw 0            ; guarda monto de la venta
  
  ; para datos obtenidos
  corresponde dw 0               ; guarda monto que le corresponde al socio(1 o 2)
  correspondedecimal dw 0        ; guarda parte decimal del monto del socio
  
ends

; SS
stack segment
  dw   128  dup(0)
ends

; CD
code segment
  ;------------------------------------------
  ;Convertir numero a string.
  ;extrae los digitos uno por uni, los guarda en pila
  ;extrae los digitos de la pila y los va concatenando
  ;Parametros:  AX = numero.
  ;             SI = Puntero donde se va a guardar el string. 
  number2string proc 
    call dollars        ;Rellenar string con $.
    mov  bx, 10         ;Extraccion de digitos, dividir por 10.
    mov  cx, 0          ;Contador de digitos extraidos.
  ;Obtener y apilar digitos de numero
  ciclo_n2s_1:       
    mov  dx, 0          ;Necesario para la division.
    div  bx             ;AX / 10:  AX:cociente DX:residuo.
    push dx             ;Guardar digito extraido en pila.
    inc  cx             ;Incrementar contador.
    cmp  ax, 0          ;Si numero es:
    jne  ciclo_n2s_1     ;no cero, loop, obtener sgte digito.  
  ;Desapilar y concatenar digitos extraidos.
  ciclo_n2s_2:  
    pop  dx             ;Extraer digito de pila
    add  dl, 30h        ;Convertir digito a char.
    mov  [si], dl     ;Concatenar digito
    inc  si             ;Actualiar puntero
    loop ciclo_n2s_2     ;Loop hasta terminar contador(cx)
  
    ret
  number2string endp       
  
  ;------------------------------------------
  ;Rellenar numstr con '$'.
  ;Parametro : SI = puntero al string a rellenar. 
  dollars proc                 
    mov  cx, 5                ;Iniciar contador (len str)
    mov  di, offset numstr    ;Guardar desplazamiento
  dollars_loop:               
    mov  bl, '$'              
    mov  [di], bl             ;rellenar $
    inc  di                   ;siguiente posicion
    loop dollars_loop         
  
    ret
  dollars endp
  
  ;------------------------------------------
  ;Escribir text.
  ;Parametro : dx = texto a imprimir.  
  print_text proc
    mov ah, 09h               ;Escribir string
    int 21h                   ;llamar a la interrupcion 09h
    ret                                
  print_text endp            
    
  ;------------------------------------------
  ;Salto de linea.
  next_line proc
    mov dx, offset linefeed   ;Imprimir salto de linea
    call print_text
    ret
  next_line endp
  
  ;------------------------------------------
  ;Escribir numero.     
  ;Parametro : ax = numero a imprimir. 
  print_number proc
    mov si, offset numstr     ;Alistar parametros de number2string
    call number2string        ;Convertir
    
    mov  dx, offset numstr    ;Imprimir numero convertido a string
    call print_text
    
    ret
  print_number endp   
  
  ;------------------------------------------
  ;Leer numero.
  read_number proc            
    mov number, 0h            ;Reiniciar valor de numero
    
  ciclo_read_number:
    mov ah, 01h               ;Leer char de input, resultados en al
    int 21h                   ;
    
    ;Verificar enter
    cmp al, 0dh               ;Verificar si al:
    je salir_read_number      ;0dh, enter a sido presionado: salir
    
    ;Obtener digito leido
    sub al, 30h               ;Restar 30 para convertir a numero
    mov ah, 00h               ;Limpiar ah
    mov bx, ax                ;Copiar digito a bx
    
    ;Actualizar numero
    mov ax, number            ;Copiar numero a ax
    mul numberplace           ;Mutiplicar por 10, posicion de digito
    add ax, bx                ;Sumar digito a numero
    mov number, ax            ;Actualizar valor de numero
    
    jmp ciclo_read_number     ;Bucle
  salir_read_number:          
    call next_line            ;Salto de linea
    mov ax, number
    ret                       
  read_number endp
  
  ;------------------------------------------
  ;Obtener monto correspondiente. 
  ;Aporte_total = aporte1 + aporte2
  ;Corresponde = (venta*aporte)/aporte_total
  ;Parametro : ax = aporte de socio. 
  get_monto_correspondiente proc
    ; Obtener parte entera
    mul venta                     ;Multiplicacion(ax = venta*aporte)    
    mov bx, aporte1
    add bx, aporte2               ;Aporte total = bx = aporte1 + aporte2    
    div bx                        ;Division - Obtener cociente (ax/aporte_total)    
    mov corresponde, ax           ;Guardar Cociente(parte entera)
    
    ; Obtener solo primer decimal
    mov ax, dx                    ;Obtener residuo
    mov number, 10                ;
    mul number                    ;Multiplicar resto por 10   
    div bx                        ;Obtener cociente
    mov correspondedecimal, ax    ;Guardar cociente(parte decimal)   
    
    ret
  get_monto_correspondiente endp
  
  ;------------------------------------------
  ;Imprimir monto correspondiente. 
  print_monto_correspondiente proc
    ;parte entera
    mov ax, corresponde           ;Monto correspondiente en ax(parte entera)
    call print_number             ;Imprimir monto 
    
    ;punto                        
    mov ah, 02h                   ;Imprimir caracter
    mov dl, 2Eh                   ;Caracter punto.
    int 21h                                          
    
    ;parte decimal
    mov ax, correspondeDecimal   ;Monto correspondiente en ax(parte decimal)
    call print_number             ;Imprimir monto
    call next_line                ;Salto de linea
    
    ret
  print_monto_correspondiente endp   

start:
; Establecer registros de segmento
  mov ax, data
  mov ds, ax
  mov es, ax      
  
leer_datos:
  ;leer aporte 1
  lea dx, message1                  ;Mostrar mensaje para input
  call print_text                   ;
  call read_number                  ;Leer numero
  mov aporte1, ax                   ;Guardar numero leido
  
  ;leer aporte 2
  lea dx, message2                  ;Mostrar mensaje para input
  call print_text                   ;
  call read_number                  ;Leer numero
  mov aporte2, ax                   ;Guardar numero leido
  
  ;leer venta
  lea dx, messageventa              ;Mostrar mensaje para input
  call print_text
  call read_number                  ;Leer numero
  mov venta, ax                     ;Guardar numero leido

resolver:
  call next_line                      ;Salto de linea
  ;socio 1
  mov ax, aporte1                     ;Preparar parametro, aporte socio 1
  call get_monto_correspondiente      ;Monto correspondiente
  lea dx, messagecorresponde1
  call print_text                     ;Mostrar texto complementario
  call print_monto_correspondiente    ;Mostrar monto
  
  ;socio 2
  mov ax, aporte2                     ;Preparar parametro, aporte socio 2
  call get_monto_correspondiente      ;Monto correspondiente
  lea dx, messagecorresponde2
  call print_text                     ;Mostrar texto complementario
  call print_monto_correspondiente    ;Mostrar monto  
  
fin:
  mov ah, 04ch                        ;Terminar programa
  int 21h  

ends

end start