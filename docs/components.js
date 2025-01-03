module.exports = {
    components: {
      schemas: {
        // user model
        User: {
          type: "object", // data type
          properties: {
            username: {
              type: "string", // data-type
              description: "User's pseudoname", // desc
              example: "Enloja", // example of a name
            },
            email: {
              type: "string",
              description: "L'email de l'utilisateur",
              example: "abc123@gmail.com"
            },
             password: {
                type: "string", // data-type
                description: "User's password", // desc
                example: ".....", // example of a email
              },
          },
        },
        // matiere model
        Matiere: {
          type: "object", // data type
          properties: {
            nom: {
              type: "string", // data-type
              description: "Le nom de la matière", // desc
              example: "Mathématique", // example of a name
            },
            description: {
              type: "string",
              description: "La description de la matière",
              example: "Dans ce cours, vous allez faire de l'algèbre, de la géométrie, etc."
            },
          },
        },
        Evaluation: {
          type: "object", // data type
          properties: {
            user_id: {
              type: "integer",
              description: "L'id de l'utilisateur",
              example: "1"
            },
            matiere_id: {
              type: "integer",
              description: "L'id de la matière",
              example: "1"
            },
            note: {
              type: "integer",
              description: "La note de l'évaluation",
              example: "85"
            },
            date_evaluation: {
              type: "date",
              description: "La date de l'évaluation",
              example: "2024-05-20"
            }
          },
        },
        // User input model
        token: {
          type: "object", // data type
          properties: {
            token: {
              type: "string",
              description: "Un message descriptif",
              example: " message: Login successful, token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcnR6enpAZ21haWwuY29tIiwiaWF0IjoxNzE1MjcwNzUyLCJleHAiOjE3MTUyODI3NTJ9.-Y1Jnaej8aeb2WfBTOGix7CfPiiM3zOeqvDOUiXxxOI, expiresIn: 12000, expirationTime: 15 h 25 min 52 s "
            },
          },
        },
        // error model
        Error: {
          type: "object", //data type
          properties: {
            message: {
              type: "string", // data type
              description: "Error message", // desc
              example: "User Not found", // example of an error message
            },
            internal_code: {
              type: "string", // data type
              description: "Error internal code", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        },
        ErrorUnauthorized: {
          type: "object", //data type
          properties: {
            internal_code: {
              type: "string", // data type
              description: "Not Authorized.  Un message d'erreur descriptif.", // desc
              example: " Un message d'erreur descriptif.", // example of an error internal code
            },
          },
        },
        message: {
          type: "object", //data type
          properties: {
            message : {
              type: "string", // data type
              description: "Un message d'erreur descriptif.", // desc
              example: "Invalid parameters", // example of an error internal code
            },
          },
        }, 
        forbidden: {
          type: "object", //data type
          properties: {
            message : {
              type: "string", // data type
              description: "Un message d'erreur descriptif.", // desc
              example: "Invalid token", // example of an error internal code
            },
          },
        }, 
        
      },
    },
  };
  