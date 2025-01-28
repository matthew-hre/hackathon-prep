# Hackathon Prep

[![built with nix](https://builtwithnix.org/badge.svg)](https://builtwithnix.org)

## What Is This?

This project is my attempt to learn some cool new tools and technologies for the
upcoming CalgaryHacks 2025 event, while hopefully building something useful. The
idea is to create a study app that helps students generate practice quizzes from
their lecture slides and notes. It uses Cohere’s Command R+ model in combination
with their Retrieval-Augmented Generation (RAG) tech to generate questions based
on uploaded materials.

## What I'm Trying To Learn

- [ ] **Drizzle ORM**: _Anything_ is better than Supabase's built in ORM.
- [ ] **Docker**: Would love to run my own Postgres instance locally.
- [ ] **Custom Auth**: Will try to spin up auth with NextAuth.
- [ ] **TailwindCSS V4**: The less files in the root of my project, the better.
- [ ] **Command R+ / RAG**: I work for Cohere, so this only makes sense.

## Features

- **Lecture Material Upload**: Users should be able to upload PDFs or text files
  of their lecture content.
- **Quiz Generation**: Users should be able to generate quizzes based on
  lecture(s) content.
- **Custom Authenication**: Users content is private, and is individual to each
  user.
- **Progress Tracking**: This is a stretch past the anticipated scope of this
  project, but a progress bar of how "versed" I am in a given subject would be
  cool.
