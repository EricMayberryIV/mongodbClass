/****************************************************************************
 * Lesson to learn how to update documents within collections               *
 * 02/12/2018 05:00pm                                                       *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/12/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/
// update template

    //db.collection.update({"queryKey":"A"},{keyToUpdate:"updatedValue"})

// update department for 'billy'

    //db.employee.update({"firstname":"billy"},{"$set":{"department":"parking"}})

// barry no longer has a department

    //db.employee.update({"firstname":"barry"},{"$unset":{"department":1}})

