namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  createdBy : String(255)  @cds.on.insert : $user;
}