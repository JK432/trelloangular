export interface Ticket{
  id: number;
  title: string;
  desc: string,
  created_time:Date;
  Status: number;
  created_by: number;
  assignee:number
}


/*
EXAMPLE


    {
        "id": 1,
        "title": "Create a django project",
        "desc": "Creating a Django project involves setting up the basic structure and configuration for a web application using the Django web framework.",
        "created_time": "2023-11-09T00:15:00Z",
        "Status": 0,
        "created_by": 1,
        "assignee": 3
    }
*/
