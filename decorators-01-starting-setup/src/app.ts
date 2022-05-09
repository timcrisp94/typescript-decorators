function Logger(logString: string) {
  return function(constructor: Function){
    console.log(logString)
    console.log(constructor)
  }
}

@Logger('LOGGING - PERSON')
class Person {
  name ='Max'

  constructor() {
    console.log('creating a new person')
  }
}

const per = new Person()

console.log(per)