/****************************************************************************
 * Update Continued                                                         *
 * 02/19/2018 07:30pm                                                       *
 *                                                                          *
 * Date       | Reason                          | Developer                 *
 * 02/19/2018 | Original                        | Eric A. Mayberry IV (EAM) *
 *                                                                          *
 ****************************************************************************/

/*
    $addToSet - if not exists, push to array
    Example: db.visited.update({"name":"jill"}, {$addToSet{"cities":"atlanta"})

    $pop - removes element from end of array (1 = end, -1 = start)
    Ex: db.visited.update({"name":"bob"},{$pop : {"cities":1}})

    $upsert - If no document is found that matches the update criteria,
              a new document will be created by combining the criteria
              and updated documents.
    Ex: db.employee.update({"firstname":"barry"},{$inc:{"fine":100}})
 */