

export class Judy {

    #primitiveType = ['string','number','bigint','boolean','undefined','symbol','null']

    #determineType(value){

        return Object.prototype.toString.call(value).slice(8, -1).toLocaleLowerCase()

    }

    #printObject(value) {
        
        console.log('{')
        Object.keys(value).forEach((key) => {
            console.log(`${key}:`)
            this.inspect(value[key])
        })
        console.log('}')

        return
    }

    #printArray(value){
        
        console.log('[')
        value.forEach((item, index, self) =>{
            console.log(`${index}: `) 
            this.inspect(item)
        })
        console.log(']')
        return

    }

    #processObject (value, valueType){

        switch(valueType) {

            case 'array':
                this.#printArray(value)
                return
                
            case 'object':
                this.#printObject(value)
                return

            default: 
                console.log('unkow type')
                console.log(valueType)
                console.log(value)
                return
        }
    }

    inspect(value){

        const valueType = this.#determineType(value)

        if(this.#primitiveType.includes(valueType)){
            console.log(value)
            return
        } else {
            this.#processObject(value,valueType)
        }

    }
}