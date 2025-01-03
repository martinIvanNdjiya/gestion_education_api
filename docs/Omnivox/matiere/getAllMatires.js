module.exports = {
    // operation's method
    get: {
      tags: ["MATIERE CRUD operations"], // operation's tag.
      description: "Récupérer toutes les nmatières", // operation's desc.
      operationId: "getAllMatiere", // unique operation ID
      // expected responses
      responses: {
        // response code
        200: {
          description: "Matières récupérées avec succès", // response desc.
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
