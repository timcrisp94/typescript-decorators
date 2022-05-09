function Logger(logString: string) {
  console.log('LOGGER FACTORY')
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}

function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    console.log('TEMPLATE FACTORY')
    const hookEl = document.getElementById(hookId)
    const p = new constructor()
    if (hookEl) {
      hookEl.innerHTML = template
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@Logger('LOGGING')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
  name ='Max'

  constructor() {
    console.log('creating a new person')
  }
}

const per = new Person()

console.log(per)

