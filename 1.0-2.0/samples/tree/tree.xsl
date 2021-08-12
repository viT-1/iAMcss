<?xml version="1.0" encoding="UTF-8"?> 
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output
	method="html"
	encoding="utf-8"
	omit-xml-declaration="yes"
	indent="no"
	doctype-system="about:legacy-compat"
/>

<xsl:variable name="modIcoSize" select="'spcIco24px'" />
<xsl:variable name="modSkin" select="'sknWindows'" />

<xsl:template match="*[@id = 'wgtBooks']/*">
	<xsl:apply-templates select="." mode="tree__list">
		<xsl:with-param name="wgtId" select="../@id" />
	</xsl:apply-templates>
</xsl:template>

<xsl:template match="ul" mode="tree__list">
	<xsl:param name="wgtId" />
	
	<xsl:variable name="listMods">
		-<xsl:choose>
			<xsl:when test="$wgtId"><xsl:value-of select="$wgtId" />--lstRoot</xsl:when>
			<xsl:otherwise>lstInner</xsl:otherwise>
		</xsl:choose>--<xsl:value-of select="$modIcoSize" />-
	</xsl:variable>
	
	<ul vp-tree__list="">
		<xsl:attribute name="vp-tree__list"><xsl:value-of select="$listMods" /></xsl:attribute>
		<xsl:apply-templates select="li" mode="tree__item" />
	</ul>
</xsl:template>

<xsl:template match="li" mode="tree__item">
	<xsl:variable name="sttNode">
		<xsl:choose>
			<xsl:when test="ul/li/ul">sttOpen</xsl:when>
			<xsl:when test="ul">sttClose</xsl:when>
			<xsl:otherwise>sttLeaf</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	
	<li vp-tree__item=""><span vp-tree__label="-{$modSkin}--{$sttNode}--{$modIcoSize}-"><xsl:value-of select="text()" /></span>
		<xsl:apply-templates select="ul" mode="tree__list" />
	</li>
</xsl:template>

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