module.exports = {
    // operation's method
    put: {
      tags: ["EVALUATION CRUD operations"], // operation's tag.
      description: "Modification d'une évaluation par l'id de l'utilisateur", // operation's desc.
      operationId: "modifEvaluationByIdUser", // unique operation ID
      parameters: [
        {
          // id model
            in: "path",
            name: "user_id",
            required: true,
            description: "An id of an evaluation", // desc
            schema: {
              type: "integer", // data type
              minimum: 1
            }
          },
      ],
      requestBody: {
        // expected request body
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                token: {
                  type: "string",
                  description: "Le token de l'utilisateur",
                },
                matiere_id: {
                    type: "integer",
                    description: "L'id de la matière",
                  },
                note: {
                  type: "integer",
                  description: "La note de l'évaluation",
                },
                date_evaluation: {
                  type: "string",
                  format : "date", 
                  description: "La date de l'évaluation",
                },
              },
              required: ["token", "matiere_id", "note", "date_evaluation"], // Mandatory fields
            },
          },
        },
      },
      // expected responses
      responses: {
       // response code
       201: {
        description: "Évaluation créée avec succès", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Evaluation", // user data model
            },
          },
        },
      },
      // response code
      400: {
        description: "Erreur lors de l'ajout de l'évaluation", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/message", // error data model
            },
          },
        },
      },
      // response code
      401: {
        description: "Not authorized", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ErrorUnauthorized", // error data model
            },
          },
        },
      },
      403: {
        description: "Forbidden", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/forbidden", // error data model
            },
          },
        },
      },
      },
    },
};
