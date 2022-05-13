import { Injectable } from '@angular/core';

import { UserInterface, UserCreateRequest } from '../../../../../store/user';
import { Dictionaries } from '../../../../../store/dictionaries';
import { AdminModelInterface, SuperAdminInterface, VoterInterface } from 'src/app/models/backend';
import { AdminA } from '../../components/personal2/roles/admin/admin.component';
import { superA } from '../../components/personal2/roles/super-admin/super-admin.component';
import { ProfileFormInterface } from '../../form.component';
import { voterA } from '../../components/personal2/roles/voter/voter.component';

@Injectable()
export class MapperService {

  constructor() { }

  userToForm(user: UserInterface): ProfileFormInterface {
    return {
      personal: {
        name: user ? user.name : null,
        photoURL: user ? user.photoURL: null,
        country : user ? user.country : null,
        about: user ? user.about : null,
        nin: user ? user.nin : null,
      },
      personal2: {        
        roleId: user ? user.roleId : null,        
        role: user ? this.getFormRole(user) : null
      }
    }
  }

  private getFormRole(user: UserInterface): AdminA | superA | voterA {

    if(user.roleId === 'voter'){
      const role = user.role as VoterInterface
      const formRole: voterA = {
        phone: role.phone           
      };
      return formRole
    }

    if(user.roleId === 'admin'){
      const role = user.role as AdminModelInterface
      const formRole: AdminA = {
        code: role.code      
       
      };
      return formRole
    }

    if(user.roleId === 'superAdmin'){ 
      const role = user.role as SuperAdminInterface 
      const formrole: superA = {
        code: role.code
      }
      return formrole
    }

  }


  formToUserCreate(form: ProfileFormInterface, dictionaries: Dictionaries): UserCreateRequest{
    return {
      name: form.personal.name,
      photoURL: form.personal.photoURL,
      country: form.personal.country,      
      about: form.personal.about,
      nin: form.personal.nin,
      roleId: form.personal2.roleId,
      isCompleted: true,
      role: this.getRole(form, dictionaries)
    }

  }

  formToUserUpdate(form: ProfileFormInterface, user: UserInterface, dictionaries: Dictionaries): UserInterface{
    return {
      uid: user.uid,
      email: user.email,
      created: user.created,
      name: form.personal.name,
      photoURL: form.personal.photoURL,      
      country: form.personal.country,
      about: form.personal.about,
      nin: form.personal.nin, 
      isCompleted: true,
      roleId: form.personal2.roleId,           
      role: this.getRole(form, dictionaries)
      //role: form.personal2.role
    }
  }

  private getRole(form: ProfileFormInterface, dictionaries: Dictionaries): AdminModelInterface | SuperAdminInterface | VoterInterface {
    if(form.personal2.roleId === 'voter'){
      const formRole = form.personal2.role as voterA;

      const role: VoterInterface = {
        phone: formRole.phone
      }
      return role;

    }

    if(form.personal2.roleId === 'admin'){
      const formRole = form.personal2.role as AdminA;

      const role: AdminModelInterface = {
        code: formRole.code
      }
      return role;

    }

    if(form.personal2.roleId === 'superAdmin'){
      const formRole = form.personal2.role as superA;
      const role: SuperAdminInterface = {
        code: formRole.code
      }
      return role;
    }
  }

}
