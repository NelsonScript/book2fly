export class Book { 
    passengers: Array<object>[]; 
    contactInformation: { 
                            email: string; 
                            phoneNumber: number 
                        };
    cardHolder: { 
                    currentMethod: string; 
                    documentType: string; 
                    installments: number; 
                    firstName: string; 
                    lastName: string; 
                    expirationMonth: number; 
                    expirationYear: number; 
                    signature: string; 
                    token: string; 
                    securityCode: string;
                    };
    userDefinedData: Array<object>[];  
    agencyId: string; 
    customer: { type: string; 
                documentType: { code: string;
                                name: string, culture: string 
                            }; 
                name: string; 
                lastName: string; 
                customerId: number; 
                address: string; 
                phoneNumber: number;
            }; 
    planId: string;
    numberOfDays: number; 
    ipAddress: { ip: number; 
                 agent: string;
               }; 
    fees: Array<object>[];
    checkIn:Date; 
    visitors: Array<object>[];
                                        
  }    