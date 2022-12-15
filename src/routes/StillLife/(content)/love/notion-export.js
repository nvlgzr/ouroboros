const json = {
  "object": "page",
  "id": "b377ada6-c8d2-4d70-b808-6ff7532a0c68",
  "created_time": "2022-12-14T23:01:00.000Z",
  "last_edited_time": "2022-12-15T23:40:00.000Z",
  "created_by": {
    "object": "user",
    "id": "9ba3d972-a756-4f33-82db-db0b87d6991d"
  },
  "last_edited_by": {
    "object": "user",
    "id": "9ba3d972-a756-4f33-82db-db0b87d6991d"
  },
  "cover": null,
  "icon": null,
  "parent": {
    "type": "database_id",
    "database_id": "64ff98d9-61c5-4d93-ad3e-b49400276cda"
  },
  "archived": false,
  "properties": {
    "prevPage": {
      "id": "BHqW",
      "type": "rollup",
      "rollup": {
        "type": "array",
        "array": [],
        "function": "show_original"
      }
    },
    "Public URL": {
      "id": "CBit",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "https://navelgazer.club/StillLife/love"
      }
    },
    "§previous": {
      "id": "C%7DnU",
      "type": "relation",
      "relation": [],
      "has_more": false
    },
    "nextPage": {
      "id": "D%5CYc",
      "type": "rollup",
      "rollup": {
        "type": "array",
        "array": [],
        "function": "show_original"
      }
    },
    "Status": {
      "id": "D%60yI",
      "type": "select",
      "select": {
        "id": "zG{S",
        "name": "Publishable",
        "color": "purple"
      }
    },
    "Successful Read-throughs": {
      "id": "EB%7De",
      "type": "select",
      "select": null
    },
    "Path": {
      "id": "E_k%5E",
      "type": "rich_text",
      "rich_text": []
    },
    "§next": {
      "id": "QhUz",
      "type": "relation",
      "relation": [],
      "has_more": false
    },
    "Next Draft": {
      "id": "a%3BJF",
      "type": "relation",
      "relation": [],
      "has_more": false
    },
    "Slug": {
      "id": "erwH",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "/love"
      }
    },
    "§n2sLib": {
      "id": "gWCh",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "$lib/StillLife",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "$lib/StillLife",
          "href": null
        }
      ]
    },
    "Last edited": {
      "id": "hs%5CU",
      "type": "last_edited_time",
      "last_edited_time": "2022-12-15T23:40:00.000Z"
    },
    "Created": {
      "id": "q%3A%7Dm",
      "type": "created_time",
      "created_time": "2022-12-14T23:01:00.000Z"
    },
    "Previous Draft": {
      "id": "qdTh",
      "type": "relation",
      "relation": [],
      "has_more": false
    },
    "URL": {
      "id": "r%3Ajk",
      "type": "url",
      "url": null
    },
    "Mine": {
      "id": "w%3Dug",
      "type": "checkbox",
      "checkbox": true
    },
    "Local URL": {
      "id": "yecv",
      "type": "formula",
      "formula": {
        "type": "string",
        "string": "http://localhost:5173/StillLife/love"
      }
    },
    "Page": {
      "id": "%7BZlR",
      "type": "rich_text",
      "rich_text": [
        {
          "type": "text",
          "text": {
            "content": "love",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "love",
          "href": null
        }
      ]
    },
    "Name": {
      "id": "title",
      "type": "title",
      "title": [
        {
          "type": "text",
          "text": {
            "content": "☕️ It’s ok. I’m don’t deserve this either. 😇💕",
            "link": null
          },
          "annotations": {
            "bold": false,
            "italic": false,
            "strikethrough": false,
            "underline": false,
            "code": false,
            "color": "default"
          },
          "plain_text": "☕️ It’s ok. I’m don’t deserve this either. 😇💕",
          "href": null
        }
      ]
    }
  },
  "url": "https://www.notion.so/It-s-ok-I-m-don-t-deserve-this-either-b377ada6c8d24d70b8086ff7532a0c68",
  "blocks": []
}

export async function get({ params }) {
  return {
    body: {
      json
    }
  }
}