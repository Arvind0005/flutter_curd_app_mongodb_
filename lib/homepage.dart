import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomePage extends StatefulWidget {
  const HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  GlobalKey<FormState> formkey = GlobalKey();
  String name;
  String uri = 'http://localhost:3000/hii';
  var client = http.Client();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ListView(
        children: [
          Center(
            child: Container(
              height: 600,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: TextFormField(
                      key: formkey,
                      onChanged: (val) {
                        setState(() {
                          name = val;
                        });
                      },
                    ),
                  ),
                  FlatButton(
                      onPressed: () async {
                        final url = Uri.parse("http://10.0.2.2:3000/hii");
                        http.Response response = await http.get(url);
                        print(response.body.toString());
                      },
                      child: Text("Upload"))
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
