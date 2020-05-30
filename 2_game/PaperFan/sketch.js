var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var xwmin, ywmin, xwmax, ywmax;
var tlx, tly;
var xvmin, yvmin, xvmax, yvmax;
var goc=20;
var a = goc*Math.PI/180;
var x,y,x1,y1,x2,y2;
var chieuDaiQuat= 25;
var phanDanGiay = 15;
var phanKhongDanGiay =8;
function quay()
{ 
    x1=x*Math.cos(a)-y*Math.sin(a);
    y1=x*sin(a)+y*cos(a);
}
function veNanTrai()
{
    float x=0;
    float x1,y1,x2,y2;
    float y=phanDanGiay+phanKhongDanGiay-chieuDaiQuat;
    float ymax=phanDanGiay+phanKhongDanGiay;
    chuyenden2D(x,y);
    quay(x,y,goc,x1,y1);
    chuyenden2D(x1,y1);
    quay(x,ymax,goc,x2,y2);
    veden2D(x2,y2);
}
void veNanPhai(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float x1,y1,x2,y2;
    float y=phanDanGiay+phanKhongDanGiay-chieuDaiQuat;
    float ymax=phanDanGiay+phanKhongDanGiay;
    chuyenden2D(x,y);
    quay(x,y,-goc,x1,y1);
    chuyenden2D(x1,y1);
    quay(x,ymax,-goc,x2,y2);
    veden2D(x2,y2);
}
void veNan(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    veNanTrai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
    veNanPhai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
}
void veGiayDanTrenTrai(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float x1,y1;
    float ymax=phanDanGiay+phanKhongDanGiay;
    quay(x,ymax,goc-20,x1,y1);
    chuyenden2D(x1,y1);
    quay(x1,y1,20,x1,y1);
    veden2D(x1,y1);
}
void veGiayDanTrenPhai(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float x1,y1;
    float ymax=phanDanGiay+phanKhongDanGiay;
    quay(x,ymax,-goc+20,x1,y1);
    chuyenden2D(x1,y1);
    quay(x1,y1,-20,x1,y1);
    veden2D(x1,y1);
}
void veGiayDanDuoiTrai(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float x1,y1;
    float ymax=phanKhongDanGiay;
    quay(x,ymax,goc-20,x1,y1);
    chuyenden2D(x1,y1);
    quay(x1,y1,20,x1,y1);
    veden2D(x1,y1);
}
void veGiayDanDuoiPhai(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float x1,y1;
    float ymax=phanKhongDanGiay;
    quay(x,ymax,-goc+20,x1,y1);
    chuyenden2D(x1,y1);
    quay(x1,y1,-20,x1,y1);
    veden2D(x1,y1);
}
void veGiayDan(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    veGiayDanTrenPhai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
    veGiayDanTrenTrai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
    veGiayDanDuoiTrai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
    veGiayDanDuoiPhai(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
}
void moQuat(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    float x=0;
    float y=phanDanGiay+phanKhongDanGiay-chieuDaiQuat;
    float ymax=phanDanGiay+phanKhongDanGiay;
    chuyenden2D(x,y);
    veden2D(x,ymax);
    for(int i=0; i<4; i++)
    {
        delay(500);
        veNan(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
        veGiayDan(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
        goc+=20;
    }
}
void dongQuat(float chieuDaiQuat, float phanDanGiay, float phanKhongDanGiay, int goc)
{
    setcolor(0);
    float x=0;
    float y=phanDanGiay+phanKhongDanGiay-chieuDaiQuat;
    float ymax=phanDanGiay+phanKhongDanGiay;
    for(int i=0; i<4; i++)
    {
        delay(500);
        veNan(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
        veGiayDan(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,goc);
        goc-=20;
    }
}

int main()
{
    int gd=0,gm;
    initgraph(&gd,&gm,"");
    float chieuDaiQuat = 25, phanDanGiay = 15, phanKhongDanGiay = 8;
    cuaso(-(phanDanGiay+phanKhongDanGiay),(phanDanGiay+phanKhongDanGiay-chieuDaiQuat),
          (phanDanGiay+phanKhongDanGiay),(phanDanGiay+phanKhongDanGiay));
    khungnhin(100,100,500,350);
    setcolor(3);
    moQuat(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,20);
    getch();
    dongQuat(chieuDaiQuat, phanDanGiay, phanKhongDanGiay,80);
    getch();
    closegraph();

}
