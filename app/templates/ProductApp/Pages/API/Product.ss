<div class="product__tabcontent--content product">
  <h2 class="hide-mobile">$ProductGroup.Title</h2>
  <div class="product__tabcontent--download">
    <a href="$PDFFileURL" class="btn" target="_blank">Download PDF</a>
  </div>
  <div class="product__tabcontent--back show-mobile"></div>
  <div class="product__tabcontent--breadcrumbs hide-mobile"></div>
  <h3 class="product__title">$Title</h3>
  <div class="product__content">
    <div class="product__mob-title show-mobile">
      <h3>$Code</h3>
      <h4>$Title</h4>
    </div>
    <% if $ProductImage %>
    <div class="product__image">
      <img src="$ProductImage" />
    </div>
    <% end_if %>
    <div class="product__description">
      <h3 class="hide-mobile">$Code</h3>
      <h4 class="hide-mobile">$Title</h4>
      $Description
    </div>
  </div>
  <div
    class="product__variant product__variant--desktop"
    style="grid-template-columns: {$FieldColumns};"
  >
    <% loop $ProductVariants %> <% if $First %>
    <div class="product__variant--head">Part Number</div>
    <% if $FieldName2 %>
    <div class="product__variant--head">$FieldName2</div>
    <% end_if %> <% if $FieldName3 %>
    <div class="product__variant--head">$FieldName3</div>
    <% end_if %> <% if $FieldName4 %>
    <div class="product__variant--head">$FieldName4</div>
    <% end_if %> <% if $FieldName5 %>
    <div class="product__variant--head">$FieldName5</div>
    <% end_if %> <% if $FieldName6 %>
    <div class="product__variant--head">$FieldName6</div>
    <% end_if %> <% if $FieldName7 %>
    <div class="product__variant--head">$FieldName7</div>
    <% end_if %> <% if $FieldName8 %>
    <div class="product__variant--head">$FieldName8</div>
    <% end_if %> <% if $FieldName9 %>
    <div class="product__variant--head">$FieldName9</div>
    <% end_if %> <% if $FieldName10 %>
    <div class="product__variant--head">$FieldName10</div>
    <% end_if %> <% if $FieldName11 %>
    <div class="product__variant--head">$FieldName11</div>
    <% end_if %> <% if $FieldName12 %>
    <div class="product__variant--head">$FieldName12</div>
    <% end_if %> <% end_if %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $PartNumber
    </div>
    <% if $FieldValue2 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue2
    </div>
    <% end_if %> <% if $FieldValue3 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue3
    </div>
    <% end_if %> <% if $FieldValue4 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue4
    </div>
    <% end_if %> <% if $FieldValue5 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue5
    </div>
    <% end_if %> <% if $FieldValue6 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue6
    </div>
    <% end_if %> <% if $FieldValue7 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue7
    </div>
    <% end_if %> <% if $FieldValue8 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue8
    </div>
    <% end_if %> <% if $FieldValue9 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue9
    </div>
    <% end_if %> <% if $FieldValue10 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue10
    </div>
    <% end_if %> <% if $FieldValue11 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue11
    </div>
    <% end_if %> <% if $FieldValue12 %>
    <div
      class="product__variant--value <% if $Even %>product__variant--even<% end_if %>"
    >
      $FieldValue12
    </div>
    <% end_if %> <% end_loop %>
  </div>
  <div class="product__variant product__variant--mobile">
    <h3>Product Data</h3>
    <% loop $ProductVariants %>
    <div class="product__variant--dropdown">
      <h3>$PartNumber</h3>
      <div class="product__variant--dropdown--container">
        <% if $FieldValue2 %>
        <div class="product__variant--item">
          <p><strong>$FieldName2</strong></p>
          <p>$FieldValue2</p>
        </div>
        <% end_if %> <% if $FieldValue3 %>
        <div class="product__variant--item product__variant--even">
          <p><strong>$FieldName3</strong></p>
          <p>$FieldValue3</p>
        </div>
        <% end_if %> <% if $FieldValue4 %>
        <div class="product__variant--item">
          <p><strong>$FieldName4</strong></p>
          <p>$FieldValue4</p>
        </div>
        <% end_if %> <% if $FieldValue5 %>
        <div class="product__variant--item product__variant--even">
          <p><strong>$FieldName5</strong></p>
          <p>$FieldValue5</p>
        </div>
        <% end_if %> <% if $FieldValue6 %>
        <div class="product__variant--item">
          <p><strong>$FieldName6</strong></p>
          <p>$FieldValue6</p>
        </div>
        <% end_if %> <% if $FieldValue7 %>
        <div class="product__variant--item product__variant--even">
          <p><strong>$FieldName7</strong></p>
          <p>$FieldValue7</p>
        </div>
        <% end_if %> <% if $FieldValue8 %>
        <div class="product__variant--item">
          <p><strong>$FieldName8</strong></p>
          <p>$FieldValue8</p>
        </div>
        <% end_if %> <% if $FieldValue9 %>
        <div class="product__variant--item product__variant--even">
          <p><strong>$FieldName9</strong></p>
          <p>$FieldValue9</p>
        </div>
        <% end_if %> <% if $FieldValue10 %>
        <div class="product__variant--item">
          <p><strong>$FieldName10</strong></p>
          <p>$FieldValue10</p>
        </div>
        <% end_if %> <% if $FieldValue11 %>
        <div class="product__variant--item product__variant--even">
          <p><strong>$FieldName11</strong></p>
          <p>$FieldValue11</p>
        </div>
        <% end_if %> <% if $FieldValue12 %>
        <div class="product__variant--item">
          <p><strong>$FieldName12</strong></p>
          <p>$FieldValue12</p>
        </div>
        <% end_if %>
      </div>
    </div>
    <% end_loop %>
  </div>
</div>
