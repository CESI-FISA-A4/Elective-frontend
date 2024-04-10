export default function notificationModel(UserProfil, states){
    if(UserProfil === 'user' ){
        if (states==='preparing'){
            return({title:'Préparation', content:'Nous préparons votre commande.'})
        }else if(states==='ready'){
            return({title:'En attente de livraison', content:"Votre commande est prête et en attente d'un livreur."})
        }else if (states==='delivery'){
            return({title:'Livraison', content:'Votre commande est en cours de livraison.'})
        }else if(states==='arrived'){
            return({title:'Arrivée', content:'Votre livreur vous attend devant chez vous !'})
        }else if(states==='livraisonEnd'){
            return({title:'Fin de commande', content:'Nous vous remerçions pour votre commande.'})
        }
    }else if(UserProfil === 'restaurantOwner'){
        if (states==='newCmd'){
            return({title:'Nouvelle commande', content:"Vous avez une nouvelle command, voulez vous l'accepter ?"})
        }else if(states==='deliverymanArrived'){
            return({title:'Livreur en attente', content:"la commande est elle prête ?"})
        }else if (states==='delivery'){
            return({title:'En cours de livraison', content:'Le livreur est en route pour livrer le client.'})
        }else if(states==='arrived'){
            return({title:'Arrivée', content:'La commande à bien été livré.'})
        }
    }else if(UserProfil === 'deliveryman'){
        if (states==='NewCmd'){
            return({title:'Nouvelle commande', content:"Vous avez une nouvelle command, voulez vous l'accepter ?"})
        }else if(states==='ready'){
            return({title:'Prête', content:'La commande vous attend et est prête à être livré.'})
        }else if(states==='livraisonEnd'){
            return({title:'Fin de livraison', content:'Nous vous confirmons que la livraison à bien été enregistré.'})
        }
    }
}