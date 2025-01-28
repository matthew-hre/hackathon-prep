{
  mkShell,
  alejandra,
  nodejs_23,
  pnpm,
}:
mkShell {
  name = "hackathon-prep";

  packages = [
    nodejs_23
    pnpm

    alejandra
  ];
}
