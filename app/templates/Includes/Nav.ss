<nav class="nav">
    <% loop $Menu(1) %>
        <li role="listitem"><a class="$LinkingMode" href="$Link">$MenuTitle</a></li>
    <% end_loop %>
  </nav>
</nav>
