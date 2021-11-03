using my.bookshop as my from '../db/data-model';

service CatalogService {
     @readonly entity Books as projection on my.Books;
}

annotate CatalogService.Books @(restrict:[
        { grant: 'READ', to: 'Auditor' },
        { grant: ['READ', 'WRITE'], to: 'User', where: 'createdBy = $user' }
    ] );