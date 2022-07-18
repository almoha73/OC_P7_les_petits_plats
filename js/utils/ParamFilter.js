export class ParamFilter{
    constructor(key, values=[]){
        this.key = key;
        this.values = values;
    }

    equals = (obj) => {
        if(obj instanceof ParamFilter){
            return obj.key === this.key
        }else{
            return false
        }
    }
}