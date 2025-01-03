module.exports = {
    // operation's method
    put: {
      tags: ["MATIERE CRUD operations"], // operation's tag.
      description: "Modification d'une nmatière par l'id de l'utilisateur", // operation's desc.
      operationId: "modifMatiereByIdUser", // unique operation ID
      parameters: [
        {
          // id model
            in: "path",
            name: "id",
            required: true,
            description: "An id of a course", // desc
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
                  description: "Le token de l'utilisateur"
                },
                nom: {
                  type: "string",
                  description: "Le nom de la matière",
                },
                description: {
                  type: "string",
                  description: "La description de la matière",
                },
              },
              required: ["token", "nom", "description"], // Mandatory fields
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        201: {
          description: "Modification d'une matière réussi avec succès", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Matiere", // user data model
              },
            },
          },
        },
        // response code
        400: {
          description: "Erreur lors de la modification de la matière", // response desc.
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
