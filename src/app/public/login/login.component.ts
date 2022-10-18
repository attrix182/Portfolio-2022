import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';
import { FormValidationAbstract } from 'src/app/shared/form-validation-abstract';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  extends FormValidationAbstract implements OnInit {

  public user: any = {};
  public formGroup: UntypedFormGroup;


  constructor(
    private FB: UntypedFormBuilder,
    private router: Router,
    private authSVC:AuthService,
    private alertSVC: AlertService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.isLogged() ? this.router.navigate(['/admin']) : null;
  }

  isLogged() {
    return localStorage.getItem('token') ? true : false;
  }

  initForm() {
    this.formGroup = this.FB.group({
      email: new UntypedFormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  setErrorMessages() {
    this.errroMessages = {
      email: {
        required: 'El correo es obligatorio',
        pattern: 'El correo no es válido',
      },
      password: {
        required: 'La contraseña es obligatoria',
        minlength: 'La contraseña debe tener al menos 6 caracteres',
      },
    };
  }

  async onLogin() {
  
    this.user = this.formGroup.value;
   
    try {
      const user = await this.authSVC.onLogin(this.user);
      console.log(user)
      if (user) {
        this.router.navigate(['/admin']);
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          this.alertSVC.alertBottom('error', 'Usuario inexistente');
          break;
        case 'auth/wrong-password':
          this.alertSVC.alertBottom('error', 'Usuario inexistente');
          break;
        case 'auth/too-many-requests':
          this.alertSVC.alertBottom(
            'error',
            'Se ha intentado ingresar sin exito varias veces, espere unos minutos y vuelva a intentarlo'
          );
      }
    }
  }
}