import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list:any[],arg=[]):any{
    if(list.length==0){
      return null;
    }
    arg[0]=arg[0] ?arg[0].trim():'';
    if(arg.length==1){
      return this.filterByAll(list,arg)
    }else{
      return this.filterByArg(list,arg)
    }
   
  }

  filterByAll(list,arg){
    let arr=Object.keys(JSON.parse(JSON.stringify(list[0])));
    let value=list.filter(item=>{ 
      let isValid=false;
      for (let index = 0; index < arr.length ;index++) {
         if(item[arr[index]] && item[arr[index]].toString().startsWith(arg[0])){
           isValid=true;
           break;
         }
      }
      if(isValid)
        return item;
    })
    return value;
  }

  filterByArg(list,arg){
    let value=list.filter(item=>{
      let isValid=false;
      for (let index = 1; index < arg.length; index++) {
         if(item[arg[index]] && item[arg[index]].toString().startsWith(arg[0])){
           isValid=true;
           break;
         }
      }
      if(isValid)
        return item;
    })
    return value;
  }

}
