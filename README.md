# Guide to The Grand Empty

This is the guidebook for The Grand Empty, both to its world and to the community that roleplays in it via Discord.
The guidebook itself is hosted through Github Pages at https://grandempty.github.io/guidebook/; what you see here is the source repository that generates that site. This guidebook is managed through Github to facilitate collaboration. All are encouraged to discuss and propose changes to this guidebook via Issues and Pull Requests; even if you decide that this community isn't for you, you are still welcome to take advantage of our open-source license to fork this repository and modify it to suit your own needs.

The text of this guidebook is released under a [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/). Technical components related to the guidebook's theme and other community infrastructure are released under the [MIT License](https://opensource.org/license/MIT).

## Guide to Editing

Pages in this guidebook are rendered from Markdown syntax into HTML using Jekyll. When changes are accepted, this process happens automatically on GitHub's servers; but this can also be done manually on your own machine in order to preview the changes. (This is necessary when working on formatting-heavy changes, or when using features not supported by GitHub's markdown previews.)

Some users experienced with coding will have their own preferred workflows, but as a basic guide to basic setup on Windows:

1. Open CMD or PowerShell, and run:
   
   ```
   winget install Microsoft.VisualStudioCode Git.Git RubyInstallerTeam.RubyWithDevKit.3.2
   ```
   
   If prompted with a license agreement, type <kbd>Y</kbd> then press <kbd>Enter</kbd> to accept.

   This will install:
   - VSCode, the recommended editor.
   - Git, the program for interacting with a git repository like this one.
   - Ruby, the framework the guidebook's code needs to run.

2. Open VSCode, aka Visual Studio Code. (This was installed in the previous step.)

3. Clone the guidebook repository. See [this guide](https://code.visualstudio.com/docs/sourcecontrol/intro-to-git#_clone-a-repository-locally) for more detail on working with git, but for the short version:
   1. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
   2. Type/select "Git: Clone" from the menu.
   3. Select "Clone from URL" from the menu.
   4. Copy and paste `https://github.com/The-Grand-Empty/guidebook.git`

4. Open the terminal inside VSCode.
   Either, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>`</kbd>, or select from the top taskbar, Terminal > New Terminal.

5. Install the Ruby packages the guidebook needs by running the command:

   ```
   bundle
   ```

6. Start the local server for viewing the guidebook in your browser with:

   ```
   bundle exec jekyll serve
   ```
   
7. Open http://localhost:4000/ in your browser to view a live-updated version of the guidebook that includes any changes you've made. Make any edits, then save the edited files and refresh your browser to see the results.

8. To contribute changes, submit them as a pull request. See [this guide](https://code.visualstudio.com/docs/sourcecontrol/github) for info on using the VSCode Github Pull Requests and Issues extension to do this.

