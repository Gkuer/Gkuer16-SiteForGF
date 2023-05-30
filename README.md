

<h3 align="center">
Development for Girlfriend birthday 🤹‍<br/>
    <img width="300" alt="Logo" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README12.png" style="max-width: 100%;" /><br/>
</h3>



<br>

## 👱🏼‍♂️ Architecture for dynamic caching static files


<h1 align="center" style="max-width: 100%;">
  <img width="550" alt="Logo" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/architecture.jpg" style="max-width: 100%;" /><br/>
</h1>

<p align="center">
  <b>There are a lot of video, image, and animation. The delivery is more fast than serving from Application or just S3.</b><br/></p>
<br>

## 🚣‍♂️ Preview

<table>
<tr>
<th align="center">
<img width="220" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README1.PNG">
  <img width="220" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README2.PNG">
</th>
<th align="center">
<img width="220" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README3.PNG">
  <img width="220" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README4.PNG">
</th>
</tr>
</table>

<table>
<tr>
<th align="center">
<img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README5.PNG">
  <img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README6.PNG">
</th>
<th align="center">
<img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README7.PNG">
  <img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README8.PNG">
</th>
</tr>
  </table>

<table>
<tr>
<th align="center">
<img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README13.jpeg">
  <img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README9.PNG">
<img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README10.MOV">
  <img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README11.MOV">
</th>
</tr>
  </table>

<br>

## 💁🏻 S3 bucket policy for CloudFront OAC

```json
{
    "Version": "2008-10-17",
    "Id": "PolicyForCloudFrontPrivateContent",
    "Statement": [
        {
            "Sid": "AllowCloudFrontServicePrincipal",
            "Effect": "Allow",
            "Principal": {
                "Service": "cloudfront.amazonaws.com"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::{bucket}/*",
            "Condition": {
                "StringEquals": {
                    "AWS:SourceArn": "arn:aws:cloudfront::{account}:distribution/{distribution}"
                }
            }
        }
    ]
}
```

<br>

## ✨ CloudFront behaviors for routing to different origins

| **Path pattern** |       Origin or origin group        | **Viewer protocol policy** |
| :--------------: | :---------------------------------: | :------------------------: |
|    /static/*     | bucket.ap-northeast-2.amazonaws.com |       HTTP and HTTPS       |
|  /user-upload/*  | bucket.ap-northeast-2.amazonaws.com |       HTTP and HTTPS       |
|   Default (*)    |            origin domain            |       HTTP and HTTPS       |

<br>

## 📦 Cache policy

>  My distribution is scheduled to be used only 20 days

#### TTL settingsInfo

* Minimum TTL (seconds) 1728000

* Maximum TTL (seconds) 31536000

* Default TTL (seconds) 1728000

#### Cache key settingsInfo

* Headers - None

* Cookies - None

* Query strings - None

#### Compression supportInfo

* Gzip Enabled

* Brotli Enabled

<br>

## 🪐 Monitoring with CloudFront metric

> Standard log is enabled.

<img width="225" src="https://gkuer-suhyun.s3.ap-northeast-2.amazonaws.com/README/README14.PNG">