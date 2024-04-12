export default function notificationModel(UserProfil, states){
    // if(UserProfil === 'user' ){
    //     if (states==='preparing'){
    //         return({title:'Préparation', content:'Nous préparons votre commande.'})
    //     }else if(states==='ready'){
    //         return({title:'En attente de livraison', content:"Votre commande est prête et en attente d'un livreur."})
    //     }else if (states==='delivery'){
    //         return({title:'Livraison', content:'Votre commande est en cours de livraison.'})
    //     }else if(states==='arrived'){
    //         return({title:'Arrivée', content:'Votre livreur vous attend devant chez vous !'})
    //     }else if(states==='livraisonEnd'){
    //         return({title:'Fin de commande', content:'Nous vous remerçions pour votre commande.'})
    //     }
    // }else
    if(UserProfil === 'restaurantOwner'){
        if (states==='NewCommand'){
            return({title:'Nouvelle commande', content:"Vous avez une nouvelle command, voulez vous l'accepter ?"})
        }
    }else if(UserProfil === 'deliveryman'){
        if (states==='NewLivraison'){
            return({title:'Nouvelle commande', content:"une nouvelle commande est disponible, voulez vous l'accepter ?"})
        }else if(states==='ReadyToDelivers'){
            return({title:'Prête', content:'La commande vous attend et est prête à être livré.'})
        }
    }
}