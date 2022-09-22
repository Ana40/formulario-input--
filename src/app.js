import { LightningElement } from "lwc";

export default class App extends LightningElement {
  account = {
      primeiroNome: "",
      sobrenome: "",
      email : "",
      website: "",
      empresa: "",
      receitaAnual: "",
    };
    handleInputChange(event){
       let account = event.target.name;
       let value = event.detail.value;
       this.account = {
           ...this.account, [account]:value

    };
    console.log(this.account);

    }
 
}

