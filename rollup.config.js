import typescript from '@rollup/plugin-typescript';

export default {
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
      compilerOptions: {
        declaration: true,
        declarationDir: './dist/types',
      },
    }),
  ],
};
