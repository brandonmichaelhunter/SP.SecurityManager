/* LoadSiteHierarchy() - this will load all sites within a selected site collection. 
   Parameters: 
   SiteUrl - represents a url that points to a site collection. 
*/
function LoadSiteHierarchy(SiteUrl)
{
  /* Testing */
  var teams = [];
  var team = new Object();
  team.Name = "NFC East";
  team.ID = 1;
  team.ObjectType = "Site";
  team.ParentID = -1;
  teams.push(team);
  team = new Object();
  team.Name = "Dallas Cowboys";
  team.ID = 2;
  team.ObjectType = "Site";
  team.ParentID = 1;
  teams.push(team);
  team = new Object();
  team.Name = "New York Giants";
  team.ID = 3;
  team.ObjectType = "Site";
  team.ParentID = 1;
  teams.push(team);

  team = new Object();
  team.Name = "Philadelphia Eagles";
  team.ID = 4;
  team.ObjectType = "Site";
  team.ParentID = 1;
  teams.push(team);

  team = new Object();
  team.Name = "Washington Redskins";
  team.ID = 5;
  team.ObjectType = "Site";
  team.ParentID = 1;
  teams.push(team);

  team = new Object();
  team.Name = "NFC West";
  team.ID = 6;
  team.ObjectType = "Site";
  team.ParentID = -1;
  teams.push(team);

  team = new Object();
  team.Name = "Arizona Cardinals";
  team.ID = 7;
  team.ObjectType = "Site";
  team.ParentID = 6;
  teams.push(team);

  team = new Object();
  team.Name = "San Francisco 49ers";
  team.ID = 8;
  team.ObjectType = "Site";
  team.ParentID = 6;
  teams.push(team);

  team = new Object();
  team.Name = "Seattle Seahawks";
  team.ID = 9;
  team.ObjectType = "Site";
  team.ParentID = 6;
  teams.push(team);

  team = new Object();
  team.Name = "St. Louis Rams";
  team.ID = 10;
  team.ObjectType = "Site";
  team.ParentID = 6;
  teams.push(team);

  team = new Object();
  team.Name = "AFC East";
  team.ID = 11;
  team.ObjectType = "Site";
  team.ParentID = -1;
  teams.push(team);

  team = new Object();
  team.Name = "Buffalo Bills";
  team.ID = 12;
  team.ObjectType = "Site";
  team.ParentID = 11;
  teams.push(team);

  team = new Object();
  team.Name = "Miami Dolphins";
  team.ID = 13;
  team.ObjectType = "Site";
  team.ParentID = 11;
  teams.push(team);

  team = new Object();
  team.Name = "New England Patriots";
  team.ID = 14;
  team.ObjectType = "Site";
  team.ParentID = 11;
  teams.push(team);

  team = new Object();
  team.Name = "New York Jets";
  team.ID = 15;
  team.ObjectType = "Site";
  team.ParentID = 11;
  teams.push(team);

  return teams;
}

function GetSiteProfile()
    {
        var SiteData = new Object();
        SiteData.SiteUrl = "http://sp_site/child";
        SiteData.DateCreated = "04/05/2013";
        SiteData.ID = "1";
        SiteData.InheritPermissions = "Yes";
        SiteData.ParentSite = "Parent Site";
        SiteData.ParentSiteUrl = "htt://sp_site/"
        SiteData.ChildSites = GetChildSites();
        SiteData.SiteGroups = GetSiteGroups();
        return SiteData;
    }
    function GetSiteGroups()
    {
       var SiteGroups = [];
        var SiteGroup;
        for(var a = 0; a < 3; a++)
        {
            SiteGroup = new Object();
            SiteGroup.GroupName = "Site "+ a;
            SiteGroup.GroupID = 1;
            SiteGroup.GroupOwner = "Brandon M. Hunter"
            SiteGroups.push(SiteGroup);
        } 
    }
    function GetChildSites()
    {
        var childSites = [];
        var childSite;
        for(var a = 0; a < 3; a++)
        {
            childSite = new Object();
            childSite.SiteName = "Site "+ a;
            childSite.SiteUrl = "http://www.espn.com";
            childSite.SiteID = "1";
            childSites.push(childSite);
        }
    }

    function GetListTree()
    {
      var Lists = [];
      var List = new Object();
      List.Name = "List 1";
      List.ID = 1;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);
      
      List = new Object();
      List.Name = "List 2";
      List.ID = 2;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);

      List = new Object();
      List.Name = "List 3";
      List.ID = 3;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);

      List = new Object();
      List.Name = "List 4";
      List.ID = 4;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);

      List = new Object();
      List.Name = "List 5";
      List.ID = 5;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);

      List = new Object();
      List.Name = "List 6";
      List.ID = 6;
      List.ObjectType = "List";
      List.ParentID = -1;
      Lists.push(List);
      return Lists;
    }