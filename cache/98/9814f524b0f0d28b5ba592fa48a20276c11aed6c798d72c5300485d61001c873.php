<?php

/* index.html */
class __TwigTemplate_747c02bda3533f1104556a1b1d63d45237c483e11853d88fc6038b663e448c4c extends Twig_Template
{
    private $source;

    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<!DOCTYPE html>
<html lang=\"fr\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">
    <title>Document</title>
    <script src=\"js/main.js\"></script>
</head>
<body>
    <div id=\"mess\">";
        // line 11
        echo twig_escape_filter($this->env, ($context["mess"] ?? null), "html", null, true);
        echo "</div>
</body>
</html>";
    }

    public function getTemplateName()
    {
        return "index.html";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  35 => 11,  23 => 1,);
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "index.html", "E:\\programmes\\UwAmp_3.1\\UwAmp\\www\\dev_multimedia\\tp1\\templates\\index.html");
    }
}
