<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output
	method="html"
	encoding="utf-8"
	omit-xml-declaration="yes"
	indent="no"
	doctype-system="about:legacy-compat"
/>

<xsl:template match="link[contains(@href, '.css') and not(@rel | @type)]">
	<xsl:copy>
		<xsl:apply-templates select="@*" />
		<xsl:attribute name="rel">stylesheet</xsl:attribute>
	</xsl:copy>
</xsl:template>

<xsl:template match="@* | node()">
	<xsl:copy>
		<xsl:apply-templates select="@* | node()" />
	</xsl:copy>
</xsl:template>

</xsl:stylesheet>