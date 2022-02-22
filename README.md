This repo is to demonstrate the issue with the TypeScript LSP integration with Neovim and the struture of an Nx repo. In particular this shows issues using 
`lua vim.lsp.buf.references()`

## Reproduction Steps

* Open up `libs/data/src/lib/data.service.ts`
* With your cursor on `getDataFromServer()` run `:lua vim.lsp.buf.references()`
* See that only one result shows in the Quickfix list
* Go to `libs/feature1/src/lib/cool-feature/cool-feature.component.ts`
* Notice the import and use of `DataService.getDataFromServer()`
* Place cursor on `getDataFromServer()` and run `:lua vim.lsp.buf.references()`
* See that multiple references show up in the Quickfix list
