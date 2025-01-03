module.exports = {
    // operation's method
    get: {
      tags: ["MATIERE CRUD operations"], // operation's tag.
      description: "Récupérer une nmatière", // operation's desc.
      operationId: "getMatiereById", // unique operation ID
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
      // expected responses
      responses: {
        // response code
        200: {
          description: "Matière récupérée avec succès", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Matiere", // user data model
              },
            },
          },
        },
      },
    },
};
