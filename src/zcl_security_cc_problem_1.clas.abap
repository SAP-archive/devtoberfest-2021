CLASS zcl_security_cc_problem_1 DEFINITION
  PUBLIC
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
    "Uses Data Model - https://github.com/SAP-samples/abap-platform-refscen-flight
  PROTECTED SECTION.
  PRIVATE SECTION.
    "Simulate Input Parameters via a constant to keep example UI/Service/Interface agnostic
    CONSTANTS: carrierId TYPE /dmo/carrier_id VALUE 'AA'.
    CONSTANTS: connectionId TYPE /dmo/connection_id VALUE '0322' .

    "During Input Someone Puts Extra SQL Conditions into the input value - SQL Injection!
    "Remember we are simulating the input here, this normally would come from UI or Service Interface
    CONSTANTS: seatsMax TYPE string VALUE `142', PRICE = '1`.


ENDCLASS.



CLASS zcl_security_cc_problem_1 IMPLEMENTATION.

  METHOD if_oo_adt_classrun~main.

    "Check that you have data that matches your input
    SELECT * FROM /dmo/flight
      WHERE carrier_id = @carrierId
        AND connection_id = @connectionId
            INTO TABLE @DATA(flights).
    out->write( flights ).

    DATA(dynamicUpdate) = |SEATS_MAX = '{ seatsMax }'|.
    UPDATE /dmo/flight
         SET (dynamicUpdate)
       WHERE carrier_id = @carrierId
            AND connection_id = @connectionId.

    "Check the data afterwards
    SELECT * FROM /dmo/flight
      WHERE carrier_id = @carrierId
        AND connection_id = @connectionId
        INTO TABLE @flights.
    out->write( flights ).

  ENDMETHOD.
ENDCLASS.
