Before adding a PDF to the website, you need to update the pdf submodule locally (after pulling):
```
git submodule update --recursive --remote
```
Alternatively, you can set git to automatically update submodules:
```
git config --global submodule.recurse true
```