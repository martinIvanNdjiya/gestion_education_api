module.exports = {
    // operation's method
    delete: {
      tags: ["EVALUATION CRUD operations"], // operation's tag.
      description: "Supprimer une évaluation par l'id de l'utilisateur", // operation's desc.
      operationId: "delEvaluationById", // unique operation ID
      parameters: [
        {
          // id model
            in: "path",
            name: "user_id",
            required: true,
            description: "An id of an user", // desc
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
              },
              required: ["token"], // Mandatory fields
            },
          },
        },
      },
      // expected responses
      responses: {
      // response code
      201: {
        description: "Évaluation supprimée avec succès", // response desc.
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
