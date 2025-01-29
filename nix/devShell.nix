{
  mkShell,
  alejandra,
  docker-compose,
  nodejs_23,
  pnpm,
}:
mkShell {
  name = "hackathon-prep";

  packages = [
    nodejs_23
    pnpm

    docker-compose

    alejandra
  ];
}
