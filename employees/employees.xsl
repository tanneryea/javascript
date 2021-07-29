<?xml version = "1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0" xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">
    <xsl:output method = "html" doctype-system = "about:legacy-compat"/>
    <xsl:template match="/">
    <html>
    <head>
        <meta charset = "utf-8"/>
        <link rel = "stylesheet" type = "text/css" href = "employees.css"/>
        <title>Employees</title>
    </head>
    <body>
        <h2>Employee Roster</h2>
        <table border = "1" align = "center" width = "50%">
            <tr bgcolor = "blue">
                <th>Employee Name</th>
                <th>Hours Worked</th>
                <th>Hourly Pay</th>
                <th>Regular Pay</th>
                <th>Overtime Pay</th>
            </tr>
        <xsl:for-each select="/employee_list/employee">
            <tr>
                <td><xsl:value-of select = "employee_name"/></td>
                <td><xsl:value-of select = "hours_worked"/></td>
                <td><xsl:value-of select = "hourly_rate"/></td>
                <td><xsl:value-of select = "regular_pay"/></td>
                <td><xsl:value-of select = "overtime_pay"/></td>
            </tr>
        </xsl:for-each>
        </table>
    </body>
</html>
</xsl:template>
</xsl:stylesheet>