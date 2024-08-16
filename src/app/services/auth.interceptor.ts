import { HttpInterceptorFn } from "@angular/common/http";
import { LoginServiceService } from "./login-service.service";
import { inject } from "@angular/core";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authService = inject(LoginServiceService);  // Injecter le AuthService
    const user = localStorage.getItem("currentUser"); // Récupérer l'utilisateur depuis localStorage
    // Extraire le token de l'utilisateur s'il est disponible
  
    // Vérifiez si le token existe
    if (user) {
      const token = JSON.parse(user!).jwtToken; 
      const clonedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
  
      // Passez la requête clonée au prochain gestionnaire
      return next(clonedReq);
    } else {
      // Passez la requête non modifiée si pas de token
      return next(req);
    }
  };