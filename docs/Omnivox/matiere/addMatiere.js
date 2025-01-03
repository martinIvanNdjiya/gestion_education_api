module.exports = {
    // operation's method
    post: {
      tags: ["MATIERE CRUD operations"], // operation's tag.
      description: "Créer une nouvelle nmatière", // operation's desc.
      operationId: "createMatiere", // unique operation ID
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
          description: "Utilisateur créé avec succès", // response desc.
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
          description: "Erreur lors de l'insertion de la matière", // response desc.
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
