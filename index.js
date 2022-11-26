const RoleBasedRestrictions = require('./RoleBasedRestrictions.json');
const checkRestriction = (method, path, type) => {
    switch (method) {
      case 'GET': {
        switch (type) {
          case 'restricted': {
            if (RoleBasedRestrictions.restricted.GET.includes(path)) {
              return true;
            }
            return false;
          }
          case 'property_engineer': {
            if (RoleBasedRestrictions.allowedForPropertyEngineer.GET.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk_admin': {
            if (RoleBasedRestrictions.allowedForFrontDeskAdmin.GET.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk': {
            if (RoleBasedRestrictions.allowedForFrontDesk.GET.includes(path)) {
              return true;
            }
            return false;
          }
        }
      }
      case 'POST': {
        switch (type) {
          case 'restricted': {
            if (RoleBasedRestrictions.restricted.POST.includes(path)) {
              return true;
            }
            return false;
          }
          case 'property_engineer': {
            if (RoleBasedRestrictions.allowedForPropertyEngineer.POST.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk_admin': {
            if (RoleBasedRestrictions.allowedForFrontDeskAdmin.POST.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk': {
            if (RoleBasedRestrictions.allowedForFrontDesk.POST.includes(path)) {
              return true;
            }
            return false;
          }
        }
      }
      case 'PUT': {
        switch (type) {
          case 'restricted': {
            if (RoleBasedRestrictions.restricted.PUT.includes(path)) {
              return true;
            }
            return false;
          }
          case 'property_engineer': {
            if (RoleBasedRestrictions.allowedForPropertyEngineer.PUT.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk_admin': {
            if (RoleBasedRestrictions.allowedForFrontDeskAdmin.PUT.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk': {
            if (RoleBasedRestrictions.allowedForFrontDesk.PUT.includes(path)) {
              return true;
            }
            return false;
          }
        }
      }
      case 'PATCH': {
        switch (type) {
          case 'restricted': {
            if (RoleBasedRestrictions.restricted.PATCH.includes(path)) {
              return true;
            }
            return false;
          }
          case 'property_engineer': {
            if (RoleBasedRestrictions.allowedForPropertyEngineer.PATCH.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk_admin': {
            if (RoleBasedRestrictions.allowedForFrontDeskAdmin.PATCH.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk': {
            if (RoleBasedRestrictions.allowedForFrontDesk.PATCH.includes(path)) {
              return true;
            }
            return false;
          }
        }
      }
      case 'DELETE': {
        switch (type) {
          case 'restricted': {
            if (RoleBasedRestrictions.restricted.DELETE.includes(path)) {
              return true;
            }
            return false;
          }
          case 'property_engineer': {
            if (RoleBasedRestrictions.allowedForPropertyEngineer.DELETE.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk_admin': {
            if (RoleBasedRestrictions.allowedForFrontDeskAdmin.DELETE.includes(path)) {
              return true;
            }
            return false;
          }
          case 'front_desk': {
            if (RoleBasedRestrictions.allowedForFrontDesk.DELETE.includes(path)) {
              return true;
            }
            return false;
          }
        }
      }
    }
  };
class AccessManagement {
    constructor(method, path){
        this.method = method;
        this.path = path;
    }
    isRestricted(){
        let isRestricted = checkRestriction(this.method, this.path, 'restricted');
        return isRestricted;
    }
    isAllowed(userRole){
        let isAllowed = checkRestriction(this.method, this.path, userRole);
        return isAllowed;
    }
}
module.exports = AccessManagement;