### Inicio
- >ng new pruebas
  >cd pruebas
  >ng test 
  [para probar la aplicacion y las pruebas programadas] 
  [abre navegador com pagina de prueba]
# Ignorar componente pruebas
- ir app.component.spec.ts
  si ponemos una 'x' delante del describe -> xdescribe('AppComponent', () => {
  va a ignorar todas las pruebas que hay en el componente

#### ### ### PRUEBAS UNITARIAS #### ### ### 

- crear nueva carpeta app/basicas
  crear nueva carpeta app/basicas/string
- crear nuevo archivo app/basicas/string/string.ts
  crear nuevo archivo app/basicas/string/string.spec.ts
# Probando strings
- ir string.ts -> creo funcion: export mensaje() xa poder probarla
- ir string.spec.ts -> defino las prueba especifica it()
- ir terminal, navegador y navegador (DEBUG) para ver avisos de success o errores
# Probando numeros
- crear nueva carpeta app/basicas/numeros
- crear nuevo archivo app/basicas/numeros/numeros.ts
- crear nuevo archivo app/basicas/numeros/numeros.spec.ts
# Probando boolean
- crear nueva carpeta app/basicas/booleanos
- crear nuevo archivo app/basicas/booleanos/booleanos.ts
- crear nuevo archivo app/basicas/booleanos/booleanos.spec.ts
# Probando arrays
- crear nueva carpeta app/basicas/arreglos
- crear nuevo archivo app/basicas/arreglos/arreglos.ts
- crear nuevo archivo app/basicas/arreglos/arreglos.spec.ts
# Probando clases
- crear nueva carpeta app/basicas/clases
- crear nuevo archivo app/basicas/clases/clase.ts
- crear nuevo archivo app/basicas/clases/clase.spec.ts

### Obtener porcentaje de cobertura de la app code-coverage
- >ng test --code-coverage
- aparte de hacer las pruebas, crea el archivo coverage
- abrir en navegador el archivo index.html -> reporte de pruebas (%)

#### ### ### PRUEBAS UNITARIAS INTERMEDIAS / AVANZADAS #### ### ### 
- Pruebas de formularios, validaciones, eventEmitter y espias
  simular retornos de servicios y simular llamada de funciones
- >ng test
# No realizar ciertas pruebas
- si ponemos una 'x' delante del describe -> xdescribe('AppComponent', () => {
  va a ignorar todas las pruebas que hay en el componente
- si ponemos una 'x' delante del it -> xit('xxx', () => {
  va a ignorar esta prueba
# EventEmitter
- crear nueva carpeta app/intermedio
- crear nueva carpeta app/intermedio/eventEmitter
- crear nuevo archivo app/intermedio/eventEmitter/jugador2.ts
- crear nuevo archivo app/intermedio/eventEmitter/jugador2.spec.ts
# Formularios
- crear nueva carpeta app/intermedio/formularios
- crear nuevo archivo app/intermedio/formularios/formulario.ts
- crear nuevo archivo app/intermedio/formularios/formulario.spec.ts
# Espias
- Los espias deberan simular las peticiones
- declarar MedicosComponent en app.modules.ts
  # Confirmar que un metodo sea llamado
  # Probar un error en un observable
  # Simular confirmacion de usuario
  # Simular denegacion de usuario

#### ### ### PRUEBAS INTEGRACION #### ### ### 

# intermedio2/medico -> SPEC generado manualmente
- >ng g c intermedio2/medico --spec=false -is
- >ng g s intermedio2/medico/medico --spec=false --flat
  (--flat no me lo crea dentro de otra carpeta)
- ir app.module.ts -> providers: MedicoService
# intermedio2/hospital -> SPEC generado automaticamente
- >ng g c intermedio2/hospital
- crear nueva carpeta intermedio2/incrementador
- pegar archivos incrementador.html, .ts y .spec
- declarar IncrementadorComponent en app.modules.ts
- PRUEBAS en el HTML del componente
- REVISAR el valor de un input
- REVISAR que los botones tenga el evento deseado
- CONFIRMAR que el progreso ha cambiado
# Separar pruebas unitarias de las pruebas de integracion
- nuevo archivo incrementador/incrementador.component.unit.spec.ts

#### ### ### PRUEBAS INTEGRACION INTERMEDIAS Y AVANZADAS (END TO END) #### ### ### 
- crear nueva carpeta avanzado
- crear nueva carpeta avanzado/rutas
- crear nuevo archivo avanzado/rutas/app.routes.ts
- crear nuevo archivo de pruebas avanzado/rutas/app.routes.spec.ts
# PRUEBA de RUTAS
- PROBAR la existencia de una ruta en particular
- PROBAR router-outlet
  ir app.html crear un <router-outlet>
  ir app.module.ts importar RouterModule.forRoot(RUTAS)
  ir app.spec.ts importar -> 
      import{ RouterTestingModule} from '@angular/router/testing'  
      imports: [
            RouterTestingModule.withRoutes([])
          ]
- CONFIRMAR que existe un router-outlet 
  ir app.spec.ts -> crear prueba it('Debe de tener un router-outlet') 
  xa comprobarlo ir a app.html y comentar <router-outlet> 
- COMPROBAR que existe un routerLink hacia el componente medicos 
  ir app.html -> <a routerLink="/medicos">Medicos</a>
  ir app.spec.ts -> crear prueba it('Debe de tener un link (routerLink) a la pagina de medicos') 
  xa comprobarlo ir a app.html y comentar <a routerLink="/medicos">Medicos</a>
- ERRORES por selectores desconocidos
  crear nuevo componente >ng g c avanzado/navbar
  cortar los <a></a> de app.html y pegar en navbar.html
  ir app.html -> <app-navbar></app-navbar>
  Opcion 1: ir app.spec.ts -> declarations: NavbarComponent
  Opcion 2: ir app.spec.ts -> schemas: [NO_ERRORS_SCHEMA] (va ignorar cualquier directiva que no conozca)
  llevarme la prueba it('Debe de tener un link (routerLink) a la pagina de medicos') desde app.spec.ts a navbar.spec.ts

  # REMPLAZAR servicios de Angular por servicios FAKE
- PREVIO PRUEBA Crear componente que recibe parametros y navega
  >ng g c avanzado/routerMedico -is
- xa comprobarlo ir a router-medico.ts y sin parametro id -> this.router.navigate(['medico']);

 # COMPROBAR parametros enviados a un Observable (!OP-2)
- Cuando disparemos el ngOnInit tenemos que subscribirnos a los params que vienen del activatedRoute, extrear el id y asignarselo al this.id
- Insertarle valores a un Observable:
