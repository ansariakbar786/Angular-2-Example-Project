import { Component } from '@angular/core';


@Component({
  selector: 'app-employee' ,
 // external style
//  templateUrl: 'employee.component.html',
//  styleUrls: ['employee.component.css']
  //specifying the style inside component file itself
//  template: `
//<style>
//      table{
//  font-weight: bold;
//  font-size: large;
//  font-family: sans-serif;
//  color: #369;
//}
//td{
//  color: 1px solid blue;
//}
//</style>
//<table border="1">
//<tr>
//   <td>First Name</td>
//   <td>{{firstName}}</td>
//</tr>
//<tr>
//   <td>Last Name</td>
//   <td>{{lastName}}</td>
//</tr>
//<tr>
//   <td>Gender</td>
//   <td>{{gender}}</td>
//</tr>
//<tr>
//   <td>Age</td>
//   <td>{{age}}</td>
//</tr>
//</table>
//`
  
  //Inline style
  
  
  template: `

  <table style="color:#367;border:solid;">
<tr>
   <td style="border 1px solid black">First Name</td>
   <td style="border 1px solid black">{{firstName}}</td>
</tr>
<tr>
   <td style="border 1px solid black">Last Name</td>
   <td style="border 1px solid black">{{lastName}}</td>
</tr>
<tr>
   <td style="border 1px solid black">Gender</td>
   <td style="border 1px solid black">{{gender}}</td>
</tr>
<tr>
   <td style="border 1px solid black">Age</td>
   <td style="border 1px solid black">{{age}}</td>
</tr>
</table>

`
})

export class EmployeeComponent {

  firstName: String= 'Akbar';
  lastName: String= 'Ansari';
  gender: String= 'Male';
  age: Number= 25;
  }
